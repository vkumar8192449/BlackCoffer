import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODBURI}/${process.env.DBNAME}`);
        console.log("DB Connected...👍👍" + connectionInstance.connection.host);
    }
    catch (err) {
        throw err;
    }
}

export default connectDB;