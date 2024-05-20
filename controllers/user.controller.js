const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const add = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la creation de l'utilisateur",
    });
  }
};

const edit = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body);
    res.status(200).json({ message: "utilisateur modifié" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message:
        "il y a eux un problème lors de la modification de l'utilisateur",
    });
  }
};

const del = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "utilisateur supprimé" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la suppression de l'utilisateur",
    });
  }
};

const auth = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = user.generateAuthToken();

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getAll,
  getOne,
  add,
  edit,
  del,
  auth,
};
