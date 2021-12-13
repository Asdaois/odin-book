import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("Nothing here");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001!");
});
