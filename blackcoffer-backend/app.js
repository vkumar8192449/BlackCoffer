import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors({
    origin: process.env.ORIGIN?.split(','),
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}));

app.use(express.static("public"));
app.use(morgan('dev'));

import overview from "./src/routes/overview.routes.js"
import country from "./src/routes/country.routes.js"

//routes declaration
app.use("/api/v1/overview", overview);
app.use("/api/v1/country", country);

export { app };