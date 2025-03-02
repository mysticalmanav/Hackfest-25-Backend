import express from "express";
import { joinWaitList, sendUpdates,sendingmessagetoemail } from "../controllers/controller.js";

const router = express.Router();

router.post("/join_wait_list", joinWaitList);

router.post("/send_updates", sendUpdates);
router.post("/sendingmessage", sendingmessagetoemail);

export default router;





