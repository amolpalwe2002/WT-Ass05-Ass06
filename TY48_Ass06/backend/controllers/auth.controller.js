import bcrypt from 'bcrypt';
import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.model.js';

export const login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.send({
            error: true,
            message: "User with this email does not exist!",
        });
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
        return res.send({ error: true, message: "Incorrect credentials!" });
    }

    if (!user.isActive) {
        return res.send({ error: true, message: "Your account is disabled!" });
    }

    const token = jwt.sign(
        {
            _id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "100000m" }
    );

    return res.send({
        ok: true,
        message: "User successfully logged in!",
        user,
        token,
    });
});


export const signup = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email
    });
    if (user) {
        return res.send({
            error: true,
            message: "User with this email already exists!",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    await newUser.save();

    return res.send({
        ok: true,
        message: "User registered successfully!",
    });
});
