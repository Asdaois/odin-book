import { Schema, model } from "mongoose";

const NotificationSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
});

export default model("Notifications", NotificationSchema);
