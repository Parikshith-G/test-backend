const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
