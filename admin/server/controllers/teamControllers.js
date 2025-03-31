// controllers/teamController.js
import Team from "../models/TeamModel.js"; // Import the Team model

// middleware/passwordCheckMiddleware.js

export const checkPassword = (req, res, next) => {
  const { password } = req.body;
  if (!process.env.pass) {
    console.error("Server Error: Password environment variable not set");
    return res
      .status(500)
      .json({ success: false, message: "Server configuration error" });
  }

  const isValidPassword = (password) => {
    return password === process.env.pass;
  };

  if (!password || !isValidPassword(password)) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid password" });
  }

  next();
};
// Fetch all teams
export const getAllTeams = async (req, res) => {
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
  res.status(200).json({ success: true, data: teams });
};

// Update team status
export const updateTeamStatus = async (req, res) => {
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
    await Team.findOneAndUpdate(
      { uniqueId },
      {
        outTime: {
          date: currentDate,
          count: team.outTime.count + count,
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
    console.log(parsedData, count);
    let uniqueId = parsedData.teamId;
    let password = parsedData.password;
    const team = await Team.findOne({ uniqueId, password });

    if (!team) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log(team);
    const currentDate = new Date();
    const diffInMinutes = team.outTime.count * (currentDate - team.outTime.date);
    await Team.findOneAndUpdate(
      { uniqueId },
      {
        outTime: {
          date: currentDate,
          count: team.outTime.count - count,
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
  setInterval(async () => {
    const teams = await Team.find({});
    teams.forEach(async (team) => {
      const { outTime, count } = team;
      if (outTime.date) {
        const newOutTime = new Date();
        const diffInMinutes = count * (newOutTime - outTime.date);
        if (diffInMinutes >= 5000) {
          await Team.findOneAndUpdate(
            { uniqueId: team.uniqueId },
            {
              outTime: { date: newOutTime, count: 0 },
              totalTime: team.totalTime + diffInMinutes,
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
    // Add the logic for the task you want to execute here
  }, 60000); // 60000 ms = 1 minute
};

// Call the function to start the interval
runEveryMinute();
