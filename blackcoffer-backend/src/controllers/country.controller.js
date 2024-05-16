import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { Blackcoffer } from "../models/Blackcoffer.model.js";

const country = asyncHandler(async (req, res) => {
    try {
        const countries = await Blackcoffer.aggregate([
            {
                $match:
                {
                    country: {
                        $exists: true, $ne: ""
                    }
                }
            },
            {
                $group:
                {
                    _id: "$country",
                    count: {
                        $sum: 1
                    }
                },
            }, {
                $sort: {
                    _id: 1
                }
            }]);

        const region = await Blackcoffer.aggregate([
            {
                $match:
                {
                    region: {
                        $exists: true, $ne: ""
                    }
                }
            },
            {
                $group:
                {
                    _id: "$region",
                    count: {
                        $sum: 1
                    }
                },
            }, {
                $sort: {
                    _id: 1
                }
            }]);

        return res.status(200).json(
            new ApiResponse(200, { countries, region }, "Data Received sucessfully")
        );
    }
    catch (err) {
        throw new ApiError(500, 'Failed to send contact message');
    }
})

export { country };