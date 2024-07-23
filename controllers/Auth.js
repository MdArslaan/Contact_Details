const bcrypt = require("bcrypt");
const User_Data = require("../models/User_Data");

// sign_up Handler
exports.sign_up = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if the user already exists
        const existingUser = await User_Data.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            });
        }

        // Hash the password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Password hashing failed",
            });
        }

        // Create new user
        const user = await User_Data.create({
            name, 
            email, 
            password: hashedPassword, 
            role
        });

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            user
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later'
        });
    }
};
