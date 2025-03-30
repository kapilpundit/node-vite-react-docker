const express = require("express");
const Role = require("../models/role");

const router = express.Router();

console.log("role.routes.js file is being executed.");

// Create Role
router.post("/", async (req, res) => {
  try {
    const role = new Role({ name: req.body.name });
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Roles
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
