import mongoose from "mongoose";

const overviewSchema = new mongoose.Schema({
    end_year: {
        type: Number,
    },
    intensity: {
        type: Number,
    },
    sector: {
        type: String,
    },
    topic: {
        type: String,
    },
    insight: {
        type: String,
    },
    url: {
        type: String,
    },
    region: {
        type: String,
    },
    start_year: {
        type: String,
    },
    impact: {
        type: String
    },
    added: {
        type: Date,
    },
    published: {
        type: Date,
    },
    country: {
        type: String,
    },
    relevance: {
        type: Number,
    },
    pestle: {
        type: String,
    },
    source: {
        type: String,
    },
    title: {
        type: String,
    },
    likelihood: {
        type: Number,
    }
});

export const Blackcoffer = mongoose.model("Blackcoffer", overviewSchema);