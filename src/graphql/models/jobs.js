import {Schema, model } from 'mongoose';

const jobSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  logo:{
    type: String,
    required: false
  }
});

export default model('jobs', jobSchema);