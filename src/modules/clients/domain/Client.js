import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: false
    },

    address: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    }

});

export default model('Client', clientSchema);
