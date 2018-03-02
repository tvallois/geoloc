exports.isPasswordCorrect = function (dbResult, password) {
  if (password == null) {
    return false;
  }
  if (password !== dbResult.password) {
    return false;
  }
  return true;
}
