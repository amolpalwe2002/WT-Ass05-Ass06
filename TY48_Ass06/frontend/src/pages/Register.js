import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../constants/appConstants';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmission = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        const { status } = await axios.post(BASE_URL + '/auth/signup', {
            name: username,
            email,
            password,
            confirmPassword
        })

        if (status < 400) {
            window.location.href = '/'
        } else {
            alert('Error occurred!')
        }
    }
    return (
        <div>
            <div className='mt-4'>
                <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                    <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Online book store</h1>
                    <div className="w-full flex flex-col gap-4">

                        <div className="flex items-start flex-col justify-start">
                            <label for="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Username:</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label for="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label for="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label for="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password:</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <button onClick={handleSubmission} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
                    </div>

                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                        <a href="/" className="text-blue-500 hover:text-blue-600">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
