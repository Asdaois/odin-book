import express from "express";
const postRouter = express.Router();
import {
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postController.js";

// -- POST ROUTES --

// Base route
postRouter.get("/:id", getPost);
// Create route
postRouter.post("/create", createPost);
// Update route
postRouter.put("/update/:id", updatePost);
// Like route
postRouter.put("/like/:id", likePost);
// Delete route
postRouter.delete("/delete/:id", deletePost);

export { postRouter };
