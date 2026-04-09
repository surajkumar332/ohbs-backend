import express from "express"
import Users from "../Models/userSchema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/Register", async (req, res) => {
    const { userName, userPassword, userMobileNo } = req.body;
    const existingUser = await Users.findOne({ userMobileNo });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = new Users({
        userName,
        userPassword: hashedPassword,
        userMobileNo
    });
    try {
        await newUser.save();
        res.status(201).json({ message: "new user added" });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
});

// login

router.post("/Login", async (req, res) => {
    try {
        const { userPassword, userMobileNo } = req.body;
        const user = await Users.findOne({ userMobileNo });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong Password" });
        }
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRETKEY,
            {expiresIn: "1h"}
        );
        console.log(process.env.JWT_SECRETKEY, "secrete data");
        res.status(200).json({ message: "Login Successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Login error", error });
    }
});

export default router;