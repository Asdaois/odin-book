import pkg from "mongoose";
const { Schema, model } = pkg;

const PostSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      image: String,
      text: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    postType: {
      type: String,
      enum: ["Post", "Comment", "SubComment"],
      required: true,
      default: "Post",
    },
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);

export default Post;
