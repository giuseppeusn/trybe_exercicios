const validateUsername = (username) => {
  if (username && username.length > 3) return true;

  return false;
}

const validateEmail = (email) => {
  if (!email) return false;

  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

const validatePassword = (password) => {
  if (password && password.length >= 4 && password.length <= 8) return true;

  return false;
}

module.exports = { validateUsername, validateEmail, validatePassword };