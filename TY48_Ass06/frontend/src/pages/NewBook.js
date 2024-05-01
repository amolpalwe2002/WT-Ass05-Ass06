import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../constants/appConstants';

const NewBook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        price: '',
        description: '',
        objectLink: '',
        thumbnail: '',
        category: '',
    });

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/books`, bookData);
            if (response.status < 400) {
                alert('Book added successfully!');
            } else {
                alert('Failed to add book');
            }
        } catch (error) {
            alert('Error adding book: ' + error.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-center mb-6">Add a New Book</h1>
            <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="title" value={bookData.title} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input type="text" name="author" value={bookData.author} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" name="price" value={bookData.price} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" value={bookData.description} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="3"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="objectLink" className="block text-sm font-medium text-gray-700">Book Link</label>
                    <input type="text" name="objectLink" value={bookData.objectLink} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
                    <input type="text" name="thumbnail" value={bookData.thumbnail} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" value={bookData.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default NewBook;
