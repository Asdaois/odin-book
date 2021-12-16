import mongoose from "mongoose";

export const connectToDatabase = () => {
  mongoose.connect(
    "mongodb+srv://admin:ahotenus@node-crash-course.jwrc4.mongodb.net/odin-book?retryWrites=true&w=majority"
  );

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Connected successfully to database");
  });
};
