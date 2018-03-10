const UserPersistor = require('../persistors/user');
const Utils = require('../utils/utils.js');

exports.login = function (req, res, next) {
  UserPersistor.getUserByEmail(req.body.email).then((result) => {
    if (result.length === 0) {
      return res.status(400).json({ status: 400, message: 'No result was found for this email' });
    }
    if (!Utils.isPasswordCorrect(result, req.body.password)) {
      return res.status(404).json({ status: 404, message: 'Wrong password' });
    }
    next();
    return res.status(200).json({ status: 200, data: result });
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({ status: 500, message: 'Internal Server Error' });
  });
};

exports.getUserById = function (req, res) {
  UserPersistor.getUserById(req.params.id).then((result) => {
    if (result.length === 0) {
      return res.status(400).json({ status: 400, message: 'No result was found for this id' });
    }
    return res.status(200).json({ status: 200, data: result });
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({ status: 500, message: 'Internal Server Error' });
  });
};

exports.addNewUser
