"use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const { WineInput, deleteWine, getAllWines } = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello!" });
  })

  .post("/api/addwine", WineInput)
  .delete("/api/deletewine", deleteWine)
  .get("/api/allwines", getAllWines)

  .listen(PORT, () => {
    `Listening on port ${PORT}`;
  });
