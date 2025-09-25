const express = require('express');
const Person = require('../models/Person');
const auth = require('../middleware/auth');
const router = express.Router();

// Create new person
router.post('/', auth, async (req, res) => {
  try {
    const person = new Person({ ...req.body, createdBy: req.user });
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update person
router.put('/:id', auth, async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete person
router.delete('/:id', auth, async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
