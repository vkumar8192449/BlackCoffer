import { Router } from "express";
import { allData, filterData } from "../controllers/allData.controller.js";

const router = Router()

router.route("/").get(allData);
router.route("/filter").get(filterData);



export default router;