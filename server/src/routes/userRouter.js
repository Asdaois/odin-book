import express from "express";
const userRouter = express.Router();
import {
  getUser,
  getProfile,
  getFriendList,
  getSearchResult,
  sendFriendRequest,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

// -- USER ROUTES --

//Base route
userRouter.get("/:id", getUser);
//Profile route
userRouter.get("/profile/:id", getProfile);
//User friend list route
userRouter.get("/friends/:id", getFriendList);
//Search user
userRouter.get("/search/:name", getSearchResult);
//Send friend request route
userRouter.post("/request/:req_user_id/:rec_user_id", sendFriendRequest);
//Create new user route
userRouter.post("/create", createNewUser);
//Update user route
userRouter.put("/update", updateUser);
//Delete user route
userRouter.delete("/delete", deleteUser);

export { userRouter };
