const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SocialSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    provider_uid: {
        type: String
    },
    provider_name: {
        type: String
    },
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
})

const Social = mongoose.model('Social', SocialSchema)
module.exports = Social