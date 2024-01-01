import { Schema, model } from 'mongoose';

const personSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    },

    email: {
        type: String,
        unique: true,
        required: false,
        lowercase: true
    },

    phoneNumber: {
        type: Number,
        unique: true,
        required: false
    },
    relatedClient: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    }
});

export default model('Person', personSchema);
