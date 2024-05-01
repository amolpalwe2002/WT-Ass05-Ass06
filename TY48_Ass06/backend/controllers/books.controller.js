import { badRequest, internalServerError, success } from "../constants/apiConstants.js";
import { Book } from "../models/Book.model.js";

export const addBook = async (req, res) => {
    try {
        const { title, author, price, description, objectLink, thumbnail, category } = req.body;

        const book = new Book({
            title,
            author,
            price,
            description,
            objectLink,
            thumbnail,
            category,
        })
        const addedBook = await book.save();
        if (!addedBook) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const requestType = success;
        return res.status(requestType.code).send({
            error: false,
            message: requestType.message,
            data: addedBook,
        });
    } catch (error) {
        const requestType = internalServerError;
        return res.status(requestType.code).send({
            error: true,
            message: error,
        });
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const requestType = success;
        return res.status(requestType.code).send({
            error: false,
            message: requestType.message,
            data: books,
        });
    } catch (error) {
        const requestType = internalServerError;
        return res.status(requestType.code).send({
            error: true,
            message: requestType.message,
        });
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const requestType = success;
        return res.status(requestType.code).send({
            error: false,
            message: requestType.message,
            data: book,
        });
    } catch (error) {
        const requestType = internalServerError;
        return res.status(requestType.code).send({
            error: true,
            message: requestType.message,
        });
    }
}

export const updateBook = async (req, res) => {
    try {
        const { title, author, price, description, objectLink, thumbnail, category } = req.body;

        const book = await Book.findById(req.params.id);
        if (!book) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
            title,
            author,
            price,
            description,
            objectLink,
            thumbnail,
            category,
        }, { new: true });
        if (!updatedBook) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const requestType = success;
        return res.status(requestType.code).send({
            error: false,
            message: requestType.message,
            data: updatedBook,
        });
    }
    catch (error) {
        const requestType = internalServerError;
        return res.status(requestType.code).send({
            error: true,
            message: requestType.message,
        });
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            const requestType = badRequest;
            return res.status(requestType.code).send({
                error: true,
                message: requestType.message,
            });
        }
        const requestType = success;
        return res.status(requestType.code).send({
            error: false,
            message: requestType.message,
            data: deletedBook,
        });
    } catch (error) {
        const requestType = internalServerError;
        return res.status(requestType.code).send({
            error: true,
            message: requestType.message,
        });
    }
}