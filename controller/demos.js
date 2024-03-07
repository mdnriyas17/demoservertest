const demos = require("../models/demos");

//create

const createDemos = async (req, res) => {

  try {
    const demoss = await demos.create(req.body);
    console.log(demoss);
    res.status(200).json(demoss);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getDemos = async (req, res) => {
  try {
    const demoss = await demos.find();
    res.status(200).json(demoss);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createDemos,
  getDemos,
};
