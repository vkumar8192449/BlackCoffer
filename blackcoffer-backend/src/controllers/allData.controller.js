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
})

export { allData };