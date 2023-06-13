const mongoose = require('mongoose')

const Schema = mongoose.Schema

const solarSchema = new Schema ({
    Name: {
        type: String,
        requuired: true
    },
    NoSP: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Solar', solarSchema)