// routes/teamRoutes.js
import express from "express";
import {
  getAllTeams,
  updateTeamStatus,
} from "../controllers/teamControllers.js";

const router = express.Router();

// Route to fetch all teams
router.get("/teams", getAllTeams);

// Route to update team status
router.patch("/teams/:id/status", updateTeamStatus);

export default router;
