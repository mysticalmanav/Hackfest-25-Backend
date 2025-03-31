// routes/teamRoutes.js
import express from "express";
import {
  getAllTeams,
  updateTeamStatus,
  checkPassword,
  login,
  teamIn,
  teamOut,
} from "../controllers/teamControllers.js";

const router = express.Router();

// Route to fetch all teams
router.get("/teams", checkPassword, getAllTeams);
router.post("/login", checkPassword, login);

// router.post("/login", login);   
// Route to update team status
router.patch("/teams/:id/status", checkPassword, updateTeamStatus);
router.post("/in", teamIn);
router.post("/out", teamOut);
export default router;
