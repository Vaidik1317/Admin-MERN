// const express = require(express); (old method)
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = 5000;

// route
app.get("/products", (req, res) => {
  //   res.send("server is ready");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${port}`);
});
// i5Yfd731OrzgG8vB
// vaidikthakkar5
