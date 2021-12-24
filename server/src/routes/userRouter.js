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
  getUserWithUid,
} from "../controllers/userController.js";

// -- USER ROUTES --

//Base route
userRouter.get("/:id", getUser);
//Get user with firebase uid
userRouter.get("/firebase/:uid", getUserWithUid);
//Profile route
userRouter.get("/profile/:id", getProfile);
//User friend list route
userRouter.get("/friends/:id", getFriendList);
//Search user
userRouter.get("/search/:name/:userUID", getSearchResult);
//Send friend request route
userRouter.post("/request/:userID/:friendID", sendFriendRequest);
//Create new user route
userRouter.post("/create", createNewUser);
//Update user route
userRouter.put("/update", updateUser);
//Delete user route
userRouter.delete("/delete", deleteUser);

export { userRouter };
