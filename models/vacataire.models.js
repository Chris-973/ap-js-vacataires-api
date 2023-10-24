const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
      type: String
    },
    github: {
      type: String
    },
    skills: {
      type: [String]
    },
    status: {
      type: String
    }
  }
)

module.exports = mongoose.model('vacataire', vacataireSchema)
