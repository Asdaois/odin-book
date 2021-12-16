import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, required: true, minLength: 3 },
  lastName: { type: String, required: true, minLength: 3 },
  dateOfBith: { type: Date, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
});

export default model("User", UserSchema);
