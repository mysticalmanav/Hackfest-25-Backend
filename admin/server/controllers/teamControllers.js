// controllers/teamController.js
import Team from "../models/TeamModel.js"; // Import the Team model

// middleware/passwordCheckMiddleware.js

export const checkPassword = (req, res, next) => {
  console.log("checkPassword middleware",req.body);
  const { username,password } = req.body;
  if (!process.env.pass) {
    console.error("Server Error: Password environment variable not set");
    return res
      .status(500)
      .json({ success: false, message: "Server configuration error" });
  }

  const isValidPasswordadmin = (password) => {
    return password === process.env.pass;
  };
  const isValidPassworduser = (password) => {
    return password === process.env.passofuser;
  };
  if (username!=="admin"&&username!=="user") {
    return res
      .status(401)
      .json({ success: false, message: "Invalid username" });
  }
  if (username=="admin"&&(!password || !isValidPasswordadmin(password))) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid password" });
  }
  if (username=="user"&&(!password || !isValidPassworduser(password))) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid password" });
  }
  next();
};
// Fetch all teams
export const getAllTeams = async (req, res) => {
  if (req.body.username==!"admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    // Fetch all teams from the database
    const teams = await Team.find({});
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch teams",
        error: error.message,
      });
  }
};
export const login = async (req, res) => {
  const teams = await Team.find({});
  if (req.body.username=="admin") {
    res.status(200).json({ success: true, data: teams });
  }
  else{
    res.status(200).json({ success: true});
  }
};

// Update team status
export const updateTeamStatus = async (req, res) => {
  console.log(req.body);
  if (req.body.username!=="admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the team by ID and update its status
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated team
    );

    if (!updatedTeam) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    res.status(200).json({ success: true, data: updatedTeam });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update team status",
        error: error.message,
      });
  }
};

export const attendedOpeningCeremony = async (req, res) => {
  console.log("openeing ceremony");

  try {
    const { parsedData, count } = req.body;
    let password = parsedData.password;
    let uniqueId = parsedData.teamId;

    const team = await Team.findOne({ uniqueId, password });

    if (!team) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    await Team.findOneAndUpdate(
      { uniqueId },
      {
        attendedopeningceremony: 1
      },
      { new: true } // Return the updated document
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const teamOut = async (req, res) => {
  console.log("teamout");

  try {
    const { parsedData, count } = req.body;
    console.log(parsedData, count);
    let password = parsedData.password;
    let uniqueId = parsedData.teamId;

    const team = await Team.findOne({ uniqueId, password });

    if (!team) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const currentDate = new Date();
    const final_count=Math.min(team.outTime.count + count,5)
    await Team.findOneAndUpdate(
      { uniqueId },
      {
        outTime: {
          date: currentDate,
          count: final_count,
        },
      },
      { new: true } // Return the updated document
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const teamIn = async (req, res) => {
  console.log("teamin");
  try {
    const { parsedData, count } = req.body;
    let uniqueId = parsedData.teamId;
    let password = parsedData.password;
    const team = await Team.findOne({ uniqueId, password });
    if (!team) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (team.checkedin==0) {
      await Team.findOneAndUpdate(
        { uniqueId },
        {
          checkedin: 1
        },
        { new: true } 
      );
    }
    const currentDate = new Date();
    console.log("currentDate", team.outTime.date);
    if (!team.outTime.date) {
      await Team.findOneAndUpdate(
        { uniqueId },
        {
          outTime: {
            date: currentDate,
            count: 0,
          },
        },
        { new: true } // Return the updated document
      );
    }
    const diffInMinutes = team.outTime.count*(currentDate - new Date(team.outTime.date));
    let final_count = Math.max(team.outTime.count - count,0);
    await Team.findOneAndUpdate(
      { uniqueId },
      {
        outTime: {
          date: currentDate,
          count: final_count,
        },
        totalTime: team.totalTime + diffInMinutes,
      },
      { new: true } // Return the updated document
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const runEveryMinute = async () => {
  const intervalId = setInterval(async () => {
    const currentDate = new Date();
    const stopDate = new Date("2025-04-06T18:00:00"); // 6th April 2025, 6 PM

    if (currentDate >= stopDate) {
      console.log("Stopping the interval as the date has passed 6th April 6 PM.");
      clearInterval(intervalId); // Stop the interval
      return;
    }

    const teams = await Team.find({});
    teams.forEach(async (team) => {
      const { outTime } = team;
      if (outTime.date) {
        const newOutTime = new Date();
        let diffInMinutes = outTime.count * (newOutTime - new Date(outTime.date));
        if (diffInMinutes >= 5000) {
          await Team.findOneAndUpdate(
            { uniqueId: team.uniqueId },
            {
              outTime: { date: newOutTime, count: outTime.count },
              totalTime: 0,
            }
          );
        }
      } else {
        await Team.findOneAndUpdate(
          { uniqueId: team.uniqueId },
          { outTime: { date: new Date(), count: 0 } }
        );
      }
    });
  }, 60000); // 60000 ms = 1 minute
};

// Call the function to start the interval
runEveryMinute();

