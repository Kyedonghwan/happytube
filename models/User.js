import mongoose from "mongoose";
import passportLM from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name is required"
    },
    email: {
        type: String,
        required: "email is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],
    avatarUrl: String,
    githubId: Number,

});

UserSchema.plugin(passportLM, { usernameField: "email" });



const model = mongoose.model("User", UserSchema);

export default model;