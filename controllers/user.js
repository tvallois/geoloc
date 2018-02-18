const User = require('../models/user');
const UserPersistor = require('../persistors/user');

exports.getUserByEmail = async function (req, res, next) {
  const result = await UserPersistor.getUserByEmail(req.body.email);
  console.log(result);
  if (result.length === 0) {
    return res.status(400).json({ status: 400, message: 'No result was found for this email' });
  }
  return res.status(200).json({ status: 200, data: result });
};

// exports.getUserById = function(req, res) {
// }
