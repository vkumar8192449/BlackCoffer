import { Router } from "express";
import { allData } from "../controllers/allData.controller.js";

const router = Router()

router.route("/").get(allData);



export default router;