import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

const Email = mongoose.model("Email", userSchema);

export default Email;