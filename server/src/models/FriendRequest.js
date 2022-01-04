import pkg from "mongoose";
const { Schema, model } = pkg;
import Notifications from "./Notifications.js";
import User from "./User.js";

const FriendRequestSchema = new Schema({
  requestingUserID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  receivingUserID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    required: true,
    enum: ["Accepted", "Rejected", "Pending"],
    default: "Pending",
  },
});

FriendRequestSchema.post("save", async (doc) => {
  const result = await User.findById(doc.requestingUserID).exec();

  const notification = new Notifications({
    userID: doc.receivingUserID,
    subject: "New Friend Request!",
    message: `You've received a friend request from: ${result.firstName} ${result.lastName}! Do you want to accept it?`,
    type: "FriendRequest",
    typeID: doc._id,
  });

  await notification.save();
});

const FriendRequest = model("FriendRequest", FriendRequestSchema);

export default FriendRequest;
