const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dob: { type: Date },
  placeOfBirth: { type: String },
  photo: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  privacy: { type: String, enum: ['public', 'private'], default: 'public' },
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);
