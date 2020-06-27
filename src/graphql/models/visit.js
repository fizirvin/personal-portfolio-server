import {Schema, model } from 'mongoose';

const VisitSchema = new Schema({
  ip: {
    type: String,
    required: false,
  },
  visitedAt: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  family: {
    type: String,
    required: false,
  },
  os: {
    type: String,
    required: false,
  }
});

export default model('Visit', VisitSchema);