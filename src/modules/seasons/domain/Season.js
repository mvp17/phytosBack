import { Schema, model } from 'mongoose';

const seasonSchema = new Schema({
    year: {
        type: Number,
        unique: true,
        required: true,
        lowercase: false
    },

    color: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },
});

export default model('Season', seasonSchema);
