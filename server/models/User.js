import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema({
  firstName: { type: String, required: true, minLength: 3 },
  lastName: { type: String, required: true, minLength: 3 },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  uid: { type: String, required: true },
});

const User = model("User", UserSchema);

export default User;
