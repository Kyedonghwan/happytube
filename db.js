import mongoose from "mongoose";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";
import "./models/User";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection;

const handleOpen = () => console.log("✅ success connection DB");
const handleError = (error) => console.log(`❌ error on connection DB: ${error}`);
db.on('error', handleError);
db.once('open', handleOpen);