const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // required: true
        },
        lastName: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        github: {
            type: String
        },
        skills: {
            type: String
        },
        modules: {
            type: String
        }
    }
)

module.exports = mongoose.model('vacataire', vacataireSchema)