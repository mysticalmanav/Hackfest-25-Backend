import express from "express";
import {
  joinWaitList,
  sendUpdates,
  sendingmessagetoemail,
} from "../controllers/controller.js";
import { saveDetails } from "../controllers/controller.js";
import { getTeamDetails } from "../controllers/controller.js";

const router = express.Router();

router.get("/testing", (req, res) => {
  return res.status(200).json({
    status: "success",
  });
});

router.post("/join_wait_list", joinWaitList);

router.post("/send_updates", sendUpdates);
router.post("/sendingmessage", sendingmessagetoemail);
router.post("/register", saveDetails);
router.post("/login", getTeamDetails);

export default router;
