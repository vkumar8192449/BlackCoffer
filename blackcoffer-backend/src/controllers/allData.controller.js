import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { Blackcoffer } from "../models/Blackcoffer.model.js";

const allData = asyncHandler(async (req, res) => {
    try {
        const data = await Blackcoffer.find();
        return res.status(200).json(
            new ApiResponse(200, data, "Data Received sucessfully")
        );
    }
    catch (err) {
        throw new ApiError(500, 'Failed to send data');
    }
});

const filterData = asyncHandler(async (req, res) => {
    try {
        let searchArr = [];
        if (req.query.country !== "All") {
            let searchObj = {};
            searchObj.country = req.query.country;
            searchArr.push(searchObj);
        }
        if (req.query.region !== "All") {
            let searchObj = {};
            searchObj.region = req.query.region;
            searchArr.push(searchObj);
        }
        if (req.query.pestle !== "All") {
            let searchObj = {};
            searchObj.pestle = req.query.pestle;
            searchArr.push(searchObj);
        }
        if (req.query.sector !== "All") {
            let searchObj = {};
            searchObj.sector = req.query.sector;
            searchArr.push(searchObj);
        }
        if (req.query.endyear !== "All") {
            let searchObj = {};
            searchObj.end_year = Number(req.query.endyear);
            searchArr.push(searchObj);
        }
        console.log(searchArr);
        let data;
        if (searchArr.length) {
            data = await Blackcoffer.find({
                $and: searchArr
            });
        }
        else {
            data = await Blackcoffer.find();
        }
        return res.status(200).json(
            new ApiResponse(200, data, "Data Received sucessfully")
        );
    }
    catch (err) {
        console.log(err);
        throw new ApiError(500, 'Failed to send data');
    }
});

export { allData, filterData };