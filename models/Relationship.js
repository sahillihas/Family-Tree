const mongoose = require('mongoose');

const RelationshipSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true },
  relationshipType: { type: String, enum: ['parent', 'child', 'sibling', 'spouse'], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Relationship', RelationshipSchema);
