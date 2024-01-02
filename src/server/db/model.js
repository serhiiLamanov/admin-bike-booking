import mongoose from "mongoose"

const schema = mongoose.Schema({
    _id: {
        type: String,
        minLength: 5,
        match: /^\w+$/,
        required: true
    },

    name: {
        type: String,
        minLength: 5,
        required: true
    },

    type: {
        type: String,
        minLength: 5,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["available", "busy", "unavailable"],
        required: true
    },

    wheelSize: {
        type: Number,
        min: 0,
        required: true
    },

    price: {
        type: Number,
        min: 0,
        required: true
    },

    description: {
        type: String,
        minLength: 5,
        required: true
    }
})

export const bikeModel = mongoose.model('bike', schema)