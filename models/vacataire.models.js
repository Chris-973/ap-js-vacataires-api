const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            type: String
        },
        // likers: {
        //     type: [String]
        // }

        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: [String],
        },
        // department: {
        //     type: [String]
        // },
        // skills: {
        //     type: [String]
        // },
        // socials: {
        //     type: [String]
        // },
        // status: {
        //     type: String
        // },
    }
)

module.exports = mongoose.model('vacataire', vacataireSchema)