import { model, Schema } from 'mongoose';


const markerSchema = new Schema({
    type: String,
    coordinates: {
        type: [Number],
        required: true
    },
    idInstallation: {
        type: String,
        required: true
    },
    waypoint: {
        type: String,
        required: true
    }
    
});


// Indexes this schema in 2dsphere format 
//markerSchema.index({coordinates: '2dsphere'});

export default model('Marker', markerSchema);
