import pkg from "mongoose";
const { Schema, model } = pkg;

const PostSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  date: { type: Date },
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
});

const Post = model("Post", PostSchema);

export default Post;
