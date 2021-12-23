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
    likes: { type: Number },
    comments: [
      {
        userID: Schema.Types.ObjectId,
        content: {
          image: String,
          text: String,
        },
        likes: Number,
        date: Date,
      },
    ],
    likedBy: [
      {
        userID: Schema.Types.ObjectId,
        liked: Boolean,
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);

export default Post;
