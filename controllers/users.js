const UserModel = require("./../models/users");

exports.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const users = await UserModel.find({ _id: req.params.userId });
  res.json(users);
};

exports.postUser = async (req, res) => {
  const newUser = UserModel(req.body);
  res.send(await newUser.save());
};

exports.updateUser = async (req, res) => {
  UserModel.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};

exports.deleteUser = (req, res) => {
  UserModel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
    res.send(data);
  });
};
