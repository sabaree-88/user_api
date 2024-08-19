import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
export const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    if (!result) {
      return res.status(400).json({ message: "Error find the users" });
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error get the users" });
  }
};

export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id);
    if (!result) {
      return res.status(400).json({ message: "Error find the users" });
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error find the users" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, password, gender, active, comments } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const users = { name, email, password: hash, gender, active, comments };
    const result = await User.create(users);
    if (!result) {
      res.status(402).json({ message: "Error creating the user" });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, gender, active, comments } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const users = { name, email, password: hash, gender, active, comments };
    const updatedUser = await User.findByIdAndUpdate(id, users, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found!" });
    }
    return res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
