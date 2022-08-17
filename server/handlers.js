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
    const result2 = await db
      .collection("Profiles")
      .updateOne({ email: req.body.email }, { $push: { cellar: req.body } });

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
  } finally {
    client.close();
  }
};

const deleteWine = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { id } = req.body;
  console.log(id);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db.collection("Wines").deleteOne({ id });
    console.log(result);
    if (result.deletedCount > 0) {
      return res.status(201).json({ status: 201, message: "Wine deleted." });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt delete wine." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const openWine = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { id, opened } = req.body;
  console.log(id, opened);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db
      .collection("Wines")
      .updateOne({ id }, { $set: { "text.opened": true } });
    console.log(result);
    if (result.modifiedCount > 0) {
      return res.status(200).json({ status: 200, data: req.body });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt open this wine." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const getAllWines = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db.collection("Wines").find().toArray();
    if (result.length > 0) {
      return res.status(200).json({ status: 200, data: result });
    } else {
      return res.status(404).json({ status: 404 });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("MyCellar");
    const user = { email: req.body.email, cellar: [], wishlist: [] };
    const result = await db.collection("Profiles").insertOne(user);
    console.log(result);
    if (result.acknowledged > 0) {
      return res.status(201).json({ status: 201, data: user });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt add user." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const checkUser = async (req, res) => {
  console.log(req.body, "Hello");
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("MyCellar");
    const result = await db.collection("Profiles").findOne(req.body);
    console.log(result);
    if (result) {
      return res.status(200).json({ status: 200, data: result });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Couldnt find user." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const getAllProfiles = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db.collection("Profiles").find().toArray();
    if (result.length > 0) {
      return res.status(200).json({ status: 200, data: result });
    } else {
      return res.status(404).json({ status: 404 });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const addReview = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { id, review } = req.body;
  console.log(review);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const result = await db
      .collection("Wines")
      .updateOne({ id }, { $set: { "text.review": review } });
    console.log(result);
    if (result.modifiedCount > 0) {
      return res.status(201).json({ status: 201, message: "Review added" });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt add review." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const AddToWishList = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    let result = null;
    if (req.body.isLiked == false) {
      result = await db
        .collection("Profiles")
        .updateOne(
          { email: req.body.email },
          { $push: { wishlist: req.body } }
        );
    } else {
      result = await db
        .collection("Profiles")
        .updateOne(
          { email: req.body.email },
          { $pull: { wishlist: { id: req.body.id } } }
        );
    }
    console.log(result);
    if (result.modifiedCount > 0) {
      return res
        .status(201)
        .json({ status: 201, message: "Added to wishlist." });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Couldnt add to wishlist." });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  } finally {
    client.close();
  }
};

const getOtherUserProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const userProfile = req.params._id;
    console.log(userProfile);
    const result = await db.collection("Profiles").findOne({ _id: cellar });

    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(404).json({ status: 404, data: "Not Found" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  }

  client.close();
};

const getWine = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("MyCellar");
    const wine = req.params.id;
    const result = await db.collection("Wines").findOne({ id: wine });

    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(404).json({ status: 404, data: "Not Found" });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.stack });
  }

  client.close();
};

module.exports = {
  WineInput,
  deleteWine,
  getAllWines,
  addUser,
  checkUser,
  addReview,
  getOtherUserProfile,
  getAllProfiles,
  AddToWishList,
  getWine,
  openWine,
};
