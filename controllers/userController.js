import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import argon from 'argon2'

export async function registerUser(req, res) {
    try {
        const user = req.body;
        user.password = await argon.hash(user.password);

        const newUser = new User(user);
        await newUser.save();

        res.json(
            { message: "User registered successfully" }
        );
    } catch (err) {
        res.status(500).json(
            { message: "Error creating user account", error: err.message }
        );
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json(
                { message: "Invalid email or password" }
            );
        }

        const isPasswordValid = await argon.verify(user.password, password);
        if (!isPasswordValid) {
            return res.status(400).json(
                { message: "Invalid email or password" }
            );
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                type: user.type,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            "secretKey"
        );

        res.json({ message: "User logged in successfully", token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}