import {Schema, model } from 'mongoose';

const townshipSchema = new Schema({
  townshipName: {
    type: String,
    required: true
  },
  stateId:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'States'
  },
  towns:[{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Towns'
  }]


});

export default model('Townships', townshipSchema);