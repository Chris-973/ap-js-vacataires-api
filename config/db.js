const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://Christopher:Christopher.2211@bd-js-vacataire.azbx5vm.mongodb.net/bd-vacataires', () =>
    console.log("Mongo connecté"));
    console.log(process.env);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
