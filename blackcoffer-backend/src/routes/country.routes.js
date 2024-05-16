import { Router } from "express";
import { country } from "../controllers/country.controller.js";

const router = Router()

router.route("/").get(country);



export default router;