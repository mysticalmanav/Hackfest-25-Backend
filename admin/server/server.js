import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./database/connectToMongoDB.js";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server is running");
}); 
app.use("/api", teamRoutes);

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((err) => console.log(`${err} did not connect`));
