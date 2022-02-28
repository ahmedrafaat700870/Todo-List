const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: String,
});
const Users = new model("Users", UserSchema);
module.exports = Users;
