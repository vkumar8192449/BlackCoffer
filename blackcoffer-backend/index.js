import 'dotenv/config';
import connectDB from "./src/db/connection.js";
import { app } from "./app.js";

connectDB();