import nodemailer from "nodemailer";
import Email from "../models/EmailModel.js";


const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export const joinWaitList = async (req, res) => {
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
        subject: "Welcome to HackFest'25!",
        html: `<h2>Hi,</h2>
                      <p>Thank you for registering! Get ready to innovate and collaborate.</p>
                      <p>We’re excited to see your ideas come to life. Stay tuned for further updates!</p>

                       <br>
                       <strong>Best regards,</strong><br>
                       <em>HackFest Team</em>`,
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
