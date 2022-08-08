const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "MyCellar";

const test = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  console.log(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("MyCellar");
    console.log("connected");

    return res.status(200).json({ status: 200, message: "You have arrived" });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
    console.log("disconnected");
  }
};

module.exports = { test };