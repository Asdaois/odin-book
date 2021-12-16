import express from "express";
const userRouter = express.Router();

// -- USER ROUTES --

//Base route
userRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "User Index" });
});
//Profile route
userRouter.get("/profile", (req, res, next) => {
  res.status(200).json({ message: "User Profile" });
});
//User friend list route
userRouter.get("/friends", (req, res, next) => {
  res.status(200).json({ message: "User's friends" });
});
//Send friend request route
userRouter.post("/request/:id", (req, res, next) => {
  res.status(200).json({ message: `Request sent to ${req.params.id}` });
});
//Create new user route
userRouter.post("/create", (req, res, next) => {
  res.status(200).json({ message: "User created" });
});
//Update user route
userRouter.put("/update", (req, res, next) => {
  res.status(200).json({ message: "User updated" });
});
//Delete user route
userRouter.delete("/delete", (req, res, next) => {
  res.status(200).json({ message: "User deleted" });
});

export { userRouter };
