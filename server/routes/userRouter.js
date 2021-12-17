import express from "express";
const userRouter = express.Router();
import {
  getUser,
  getProfile,
  getFriendList,
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
//Send friend request route
userRouter.post("/request/:id", (req, res, next) => {
  res.status(200).json({ message: `Request sent to ${req.params.id}` });
});
//Create new user route
userRouter.post("/create", createNewUser);
//Update user route
userRouter.put("/update", updateUser);
//Delete user route
userRouter.delete("/delete", deleteUser);

export { userRouter };
