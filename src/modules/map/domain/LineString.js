import { Schema, model } from 'mongoose';


const lineStringSchema = new Schema({
  coordinates: {
    type: [[Number]],
    required: true
  },
  idInstallation: {
      type: String,
      required: true
  }
});


export default model('LineString', lineStringSchema);
