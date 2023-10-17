const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
    {
        name: {
            type: String,
          },
          lastName: {
              type: String,
          },
          phone: {
              type: String
          },
          email: {
            type: String,
          },
          github: {
            type: String
          },
          skills: {
            type: [String]
          },
          modules: {
            type: [String]
          },
          status: {
              type: String,
          },
    }
)

module.exports = mongoose.model('vacataire', vacataireSchema)