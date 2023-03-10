import mongoose from "mongoose";

export const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: String,
        required: [true, "Age is required"]
    },
}, {
    timestamps: true
});