import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    objectLink: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,
        default: "https://via.placeholder.com/150",
    },
    category: {
        type: String,
        required: true,
        default: "general",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,  
    },
});

export const Book = mongoose.model("Book", bookSchema);