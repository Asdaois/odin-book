import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectToDatabase } from "./database.js";
import { userRouter } from "../routes/userRouter.js";

const app = express();

//middlewares
app.use(
  cors({
    origin: [
      "https://odin-book-client.herokuapp.com/",
      "http://localhost:3000",
    ],
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Nothing here");
});

app.use("/users", userRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  connectToDatabase();
});
