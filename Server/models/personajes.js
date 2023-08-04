const mongoose = require('mongoose')
const {Schema} = mongoose

const marvelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    series: {
        type: String,
        required: true
    }
})

const marvelModel = mongoose.model('marvel', marvelSchema)

module.exports = marvelModel