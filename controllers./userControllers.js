const { User, Thoughts } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "Couldn't find this id!!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};