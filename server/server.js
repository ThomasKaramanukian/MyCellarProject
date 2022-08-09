"use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const { WineInput } = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello!" });
  })

  .post("/api/addwine", WineInput)

  .listen(PORT, () => {
    `Listening on port ${PORT}`;
  });
