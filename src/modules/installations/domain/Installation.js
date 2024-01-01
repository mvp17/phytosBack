import { Schema, model } from 'mongoose';

const installationSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowecase: false,
    },

    productName: {
        type: String,
        unique: false,
        required: true,
        lowecase: false,
    },

    seasonYear: {
        type: Number,
        unique: false,
        required: true
    },

    clientName: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    },

    plantationName: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    },

    plotName: {
        type: String,
        unique: false,
        required: true,
        lowercase: false
    },

    installationDate: {
        type: String,
        unique: false,
        required: false
    },

    activationDate: {
        type: String,
        unique: false,
        required: false
    },

    province: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    municipality: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    features: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    projectionObservations: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    installationObservations: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    revisionObservations: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    retreatObservations: {
        type: String,
        unique: false,
        required: false,
        lowercase: false
    },

    contacts: {
        type: [String],
        unique: false,
        required: false,
        lowercase: false

    }
    
});

export default model('Installation', installationSchema);
