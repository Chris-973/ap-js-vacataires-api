const mongoose = require("mongoose");

const vacataireSchema = mongoose.Schema({
  firstName: {
    type: String,
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
    type: String,
  },
  skills: {
    type: [String],
  },
});

const coursSchema = mongoose.Schema({
  // vacataire: vacataireSchema,
  vacataire: {
    firstName: {
      type: String,
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
      type: String,
    },
  },
  name: {
    type: String,
  },
  color: {
    type: String,
  },
  group: {
    type: String,
  },
});

module.exports = mongoose.model("cours", coursSchema);
