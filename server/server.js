"use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const {
  WineInput,
  deleteWine,
  getAllWines,
  addUser,
  checkUser,
  addReview,
  getOtherUserProfile,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello!" });
  })

  .post("/api/addwine", WineInput)
  .delete("/api/deletewine", deleteWine)
  .get("/api/allwines", getAllWines)
  .post("/api/adduser", addUser)
  .post("/api/user", checkUser)
  .post("/api/addreview/", addReview)
  .get("/api/userprofile/:_id", getOtherUserProfile)

  // .get("/api/profile/:user", getProfile)

  .listen(PORT, () => {
    `Listening on port ${PORT}`;
  });
