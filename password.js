function isValidPassword(password) {
  return password.length > 7 && password.trim().length > 0;
}

module.exports = { isValidPassword };
