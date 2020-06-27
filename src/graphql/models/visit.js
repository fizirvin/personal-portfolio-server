import {Schema, model } from 'mongoose';

const VisitSchema = new Schema({
  ip: {
    type: String,
    required: false,
  },
  visitedAt: {
    type: String,
    required: false,
  }
});

export default model('Visit', VisitSchema);