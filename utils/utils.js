const bcrypt = require('bcrypt');

exports.isPasswordCorrect = function (dbResult, password) {
  if (password == null) {
    return false;
  }
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return false;
    }
    bcrypt.compare(dbResult.password, hash, (res) => {
      if (res) {
        return true;
      }
      return false;

    });
    return false;
  });
  return false;
};
