const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const PersonSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Gender is required'],
    },
    dob: {
      type: Date,
    },
    placeOfBirth: {
      type: String,
      trim: true,
    },
    photo: {
      type: String, 
      trim: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'Creator reference is required'],
    },
    privacy: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Person', PersonSchema);
