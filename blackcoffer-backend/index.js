import 'dotenv/config';
import connectDB from "./src/db/connection.js";
import { app } from "./app.js";

connectDB().then(() => {
    const server = app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("DB Connection Failed 👎👎");
    console.log(err.message);
});