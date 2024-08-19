import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    enum: ["true", "false"],
    default: null,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
