const User = require("../models/User");

require("dotenv").config();

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    // Check if password matches
    if (existingUser && existingUser.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    if (existingUser) {
      const u = {
        name: existingUser.name,
        email: existingUser.email,
      };
      return res.status(200).json(u);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password,
    });

    const newUser = await user.save();
    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  Login,
  Signup,
};
