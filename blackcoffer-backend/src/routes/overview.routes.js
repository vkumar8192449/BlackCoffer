import { Router } from "express";
import { overview } from "../controllers/overview.controller.js";

const router = Router()

router.route("/").get(overview)



export default router;