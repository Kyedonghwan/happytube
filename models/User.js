import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }]
});

const model = mongoose.model("User", UserSchema);

export default model;