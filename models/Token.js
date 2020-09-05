const mongoose = require('mongoose')
const User = require('./User')
const Schema = mongoose.Schema

const TokenSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    token: {
        type: String
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String
    },
    createAt: {
        type: Date
    }
})

const Token = mongoose.model('Token', TokenSchema)
module.exports = Token