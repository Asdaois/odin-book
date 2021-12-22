import express from "express";
const postRouter = express.Router();

// -- POST ROUTES --

// Base route
postRouter.get(":/id", (req, res, next) => {
  res.json({ message: `Post ${req.params.id} page` });
});
// Create route
postRouter.post("/create", (req, res, next) => {
  res.json({ message: "Post created!" });
});
// Update route
postRouter.put("/update/:id", (req, res, next) => {
  res.json({ message: `Post ${req.params.id} updated!` });
});
// Delete route
postRouter.delete("/delete/:id", (req, res, next) => {
  res.json({ message: `Post ${req.params.id} deleted!` });
});

export { postRouter };
