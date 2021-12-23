import pkg from "mongoose";
const { Schema, model } = pkg;

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
  read: {
    type: Boolean,
    default: false,
  },
});

const Notifications = model("Notifications", NotificationSchema);

export default Notifications;