import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true, minLength: 3 },
  lastName: { type: String, required: true, minLength: 3 },
  dateOfBirth: { type: Date },
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
});

const User = model("User", UserSchema);

export default User;
