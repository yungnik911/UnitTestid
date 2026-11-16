function isValidPassword(password) {
  return password.length > 8 && password.trim().length > 0;
}

module.exports = { isValidPassword };
