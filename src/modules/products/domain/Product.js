import { Schema, model } from 'mongoose';


const productSchema = new Schema({
    commonName: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    },

    affectedVariety: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    productDensityPerHectare: {
        type: Number,
        unique: false,
        required: true
    },

    color: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    }
});

export default model('Product', productSchema);
