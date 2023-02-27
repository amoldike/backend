const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
});

module.exports = mongoose.model("users", UsersSchema);
