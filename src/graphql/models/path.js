import {Schema, model } from 'mongoose';

const pathSchema = new Schema({
  pathName:{
    type: String,
    required: true
  },
  coreTechnology: {
    type: String,
    required: true
  },
  courses:[{
    courseId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    courseName: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    }
  }]


});

export default model('path', pathSchema);