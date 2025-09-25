const express = require('express');
const Relationship = require('../models/Relationship');
const auth = require('../middleware/auth');
const router = express.Router();

// Create relationship
router.post('/', auth, async (req, res) => {
  try {
    const rel = new Relationship({ ...req.body, createdBy: req.user });
    await rel.save();
    res.status(201).json(rel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
