const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userModel = require("./models/UserModel");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then((con) => {
    console.log(`connected to ${con.connection.host}`);
  })
  .catch((err) => {
    console.log("err bro");
  });

app.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/createUser", async (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(4000, () => {
  console.log(`port 4000`);
});
