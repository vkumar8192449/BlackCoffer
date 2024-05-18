import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { Blackcoffer } from "../models/Blackcoffer.model.js";

const overview = asyncHandler(async (req, res) => {
    try {
        const intensity = await Blackcoffer.aggregate([
            {
                $match:
                {
                    intensity: {
                        $exists: true, $ne: ""
                    }
                }
            },
            {
                $group:
                {
                    _id: "$intensity",
                    count: {
                        $sum: 1
                    }
                },
            }, {
                $sort: {
                    _id: 1
                }
            }]);

        const likelihood = await Blackcoffer.aggregate([
            {
                $match:
                {
                    likelihood: {
                        $exists: true, $ne: ""
                    }
                }
            },
            {
                $group:
                {
                    _id: "$likelihood",
                    count: {
                        $sum: 1
                    }
                },
            }, {
                $sort: {
                    _id: 1
                }
            }]);

        const relevance = await Blackcoffer.aggregate([
            {
                $match:
                {
                    relevance: {
                        $exists: true, $ne: ""
                    }
                }
            },
            {
                $group:
                {
                    _id: "$relevance",
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
            new ApiResponse(200, { intensity, likelihood, relevance }, "Data Received sucessfully")
        );
    }
    catch (err) {
        console.log(err);
        throw new ApiError(500, 'Failed to send contact message');
    }
})

export { overview };