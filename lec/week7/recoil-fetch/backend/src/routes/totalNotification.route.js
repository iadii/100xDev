import { Router } from "express";
import {totalNotifications} from "../controllers/totalNotification.controller.js"

const router = Router()

router.route("/").get(totalNotifications)

export default router;