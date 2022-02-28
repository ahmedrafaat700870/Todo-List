const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});
const Users = new model("Users", UserSchema);
module.exports = Users;
