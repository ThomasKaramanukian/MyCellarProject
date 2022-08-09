const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "MyCellar";

const WineInput = async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("MyCellar");
    const result = await db.collection("Wines").insertOne(req.body);
    console.log(result);
    if (result.acknowledged > 0) {
      return res.status(201).json({ status: 201, data: req.body });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt add the wine." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  }

  client.close();
};

const deleteWine = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db.collection("Wines").deleteOne(req.body);
    if (result.acknowledged > 0) {
      return res.status(204).json({ status: 204, data: req.body });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt delete the wine." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  }

  client.close();
};

const getAllWines = async (req, res) => {
  const result = await getAllWines();
  res.status(200).json({ status: 200, data: result.items });
};

module.exports = { WineInput, deleteWine, getAllWines };
