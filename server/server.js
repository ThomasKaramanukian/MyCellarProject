"use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const { test } = require("./handlers");

express()
  .use(morgan("tiny"))
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello!" });
  })

  .get("/api/test", test)

  .listen(PORT, () => {
    `Listening on port ${PORT}`;
  });
