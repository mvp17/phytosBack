import { Schema, model } from 'mongoose';


const polygonSchema = new Schema({
  coordinates: {
    type: [[[Number]]],
    required: true
  },
  idInstallation: {
      type: String,
      required: true
  }
});


export default model('Polygon', polygonSchema);
