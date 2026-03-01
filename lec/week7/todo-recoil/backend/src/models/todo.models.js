import mongoose, { mongo, Schema } from "mongoose";

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", TodoSchema)