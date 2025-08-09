import User from "../Models/userModel.js";
import generateToken from "../Utils/genrateToken.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  res.json({ _id: user.id, name: user.name, email: user.email, token: generateToken(user.id) });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ _id: user.id, name: user.name, email: user.email, token: generateToken(user.id) });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};
