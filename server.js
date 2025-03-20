import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  const user = await User.create({ name: "walid", email: "walid@gmail.com" });
  res.json({ user });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(5000, () => {
      console.log("connected to database.");
    });
  })
  .catch(() => console.log("connection failed."));
