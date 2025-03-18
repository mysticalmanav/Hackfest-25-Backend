import nodemailer from "nodemailer";
import Email from "../models/EmailModel.js";
import cloudinary from "cloudinary";
import Team from "../models/TeamModel.js";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "hackfest2k25@gmail.com",
    pass: "tycspsjtiheloczd",
  },
});

export const joinWaitList = async (req, res) => {
  console.log(process.env.user);
  try {
    const { email } = req.body;
    const user = await Email.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "Email is already in the waitlist",
      });
    }

    const newUser = new Email({
      email,
    });

    if (newUser) {
      await newUser.save();
      res.json({ message: "Email submitted successfully!" });

      const mailOptions = {
        from: process.env.user,
        to: newUser.email,
        subject: "Welcome to HackFest'25! 🚀",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #ff6200;">Hi ${newUser.name},</h2>
            <p>🎉 Thank you for registering for <strong>HackFest'25</strong>! Get ready to innovate, collaborate, and compete with the brightest minds.</p>
            
            <p>We're thrilled to have you on board! Stay tuned for exciting updates and important announcements.</p>
      
            <p style="margin-top: 20px; text-align: center;">
              <a href="http://www.hackfest.in" target="_blank" 
                style="display: inline-block; background-color: #ff6200; color: #fff; padding: 12px 20px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
                🚀 Register/Login on Website
              </a>
            </p>
      
            <br>
            <p>For any queries, feel free to reach out. Let’s make this an unforgettable experience!</p>
            
            <strong>Best regards,</strong><br>
            <em>HackFest Team</em>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Welcome email sent");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      return res.status(400).json({ error: "Invalid Email" });
    }
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendUpdates = async (req, res) => {
  try {
    const { subject, content } = req.body;
    const users = await Email.find({}, "email");

    if (users.length === 0) {
      return res.status(400).json({ error: "No registered users found" });
    }

    if (users.length !== 0) {
      res.json({ message: "Email submitted successfully!" });

      const emailList = users.map((user) => user.email);
      const mailOptions = {
        from: process.env.user,
        to: emailList,
        subject: subject,
        html: content,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Emails sent");
      } catch (error) {
        console.error("Error sending emails:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Email" });
    }
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendingmessagetoemail = async (req, res) => {
  try {
    console.log("Request received");
    const { email, message } = req.body;
    console.log("Email:", email, "Message:", message);

    if (!email || !message) {
      return res.status(400).json({
        message: "Provide proper email and message",
      });
    }

    const user = await Email.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "Email is not registered",
      });
    }

    console.log("Sending email...");
    const mailOptions = {
      from: process.env.user,
      to: user.email,
      subject: "Welcome to HackFest'25!",
      html: `<h2>Dear Participant,</h2>

<p>Greetings from HackFest, IIT (ISM) Dhanbad!</p>

<p>We are delighted to confirm your registration for HackFest, a premier 36-hour hackathon organized by NVCTI, IIT (ISM) Dhanbad. This event is designed to foster innovation, collaboration, and problem-solving skills among aspiring developers like you.</p>

<p>${message}</p>

<p>Get ready to ideate, innovate, and create impactful solutions. If you have any queries, please feel free to reach out to us.</p>

<br>

<strong>Best regards,</strong><br>
<em>HackFest Team</em><br>
<em>NVCTI, IIT (ISM) Dhanbad</em>
`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return res.status(200).json({
      message: "Welcome email sent",
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const sendEmailAfterRegistration = async (email, uniqueId, password) => {
  try {
    const user = await Team.findOne({ email });

    if (!user) {
      throw new Error("Email is not registered");
    }

    console.log("Sending email...");
    const mailOptions = {
      from: process.env.user,
      to: user.email,
      subject: "Welcome to HackFest'25!",
      html: `<h2>Dear Participant,</h2>

<p>Greetings from HackFest, IIT (ISM)
Dhanbad!</p>

<p>We are delighted to confirm your registration for HackFest, a premier 36-hour hackathon organized by NVCTI, IIT (ISM) Dhanbad. This event is designed to foster innovation, collaboration, and problem-solving skills among aspiring developers like you.</p>

<p>Here are your login credentials:</p>
<p>Unique ID: ${uniqueId}</p>
<p>Password: ${password}</p>

<p>Kindly keep these details safe and secure. You will need them to access the event portal and participate in the hackathon.</p>

<p>Get ready to ideate, innovate, and create impactful solutions. If you have any queries, please feel free to reach out to us.</p>

<br>

<strong>Best regards,</strong><br>
<em>HackFest Team</em><br>
<em>NVCTI, IIT (ISM) Dhanbad</em>
`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Error:", error);
    throw new Error("Failed to send email");
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const generateUniqueId = async () => {
  let uniqueId;
  let existingTeam;

  do {
    uniqueId = crypto.randomBytes(3).toString("hex").toUpperCase(); // Generates a 6-character ID
    existingTeam = await Team.findOne({ uniqueId });
  } while (existingTeam); // Keep generating until we find a unique one

  return uniqueId;
};

export const saveDetails = async (req, res) => {
  try {
    const {
      teamName,
      leaderName,
      email,
      leaderCollege,
      leaderYear,
      memberCount,
      members,
      referral,
    } = req.body;

    console.log("seoingwsgn");

    const existingTeam = await Team.findOne({ email });
    if (existingTeam)
      return res
        .status(400)
        .json({ message: "Team already registered with this email!" });

    console.log(members);
    const { idProof } = req.body;
    console.log(idProof);

    // Parse members JSON
    // Ensure members is an array
    const teamMembers = Array.isArray(members) ? members : JSON.parse(members);

    const uniqueId = await generateUniqueId();

    // Generate a random secure password (8-character hex string)
    const password = crypto.randomBytes(4).toString("hex").toUpperCase();
    console.log("Password generated:", password);
    console.log("Unique ID generated:", uniqueId);

    console.log(teamMembers);
    const newTeam = new Team({
      teamName,
      leaderName,
      email,
      leaderCollege,
      leaderYear,
      memberCount,
      members: teamMembers,
      idProofUrl: idProof,
      uniqueId,
      password,
      referral,
    });

    console.log(newTeam);

    // Send email after registration

    await newTeam.save();
    console.log(newTeam);
    await sendEmailAfterRegistration(email, uniqueId, password);

    // Save team details
    res.status(201).json({ message: "Team registered successfully!" });
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getTeamDetails = async (req, res) => {
  try {
    const { uniqueId, password } = req.body;

    const team = await Team.findOne({ uniqueId, password });

    if (!team) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ success: true, team });
  } catch (error) {
    console.log("Error in controller", error.message);
    res.status(500).json({ message: error.message });
  }
};
