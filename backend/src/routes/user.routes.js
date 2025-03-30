const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Get All Users
router.get("/", async (req, res) => {
    try {
      const users = await User.find().populate("role");
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Create User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update user by ID
router.put("/:id", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, password, role },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
});

module.exports = router;
