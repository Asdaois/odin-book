import pkg from "mongoose";
const { Schema, model } = pkg;

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

const FriendRequest = model("Notifications", FriendRequestSchema);

export default FriendRequest;
