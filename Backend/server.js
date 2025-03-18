  import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./database/connectToMongoDB.js";
import routes from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use("/api", routes);

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(process.env.user);
      console.log(`Server running on ${port}`);
    });
  })
  .catch((err) => console.log(`${err} did not connect`));
