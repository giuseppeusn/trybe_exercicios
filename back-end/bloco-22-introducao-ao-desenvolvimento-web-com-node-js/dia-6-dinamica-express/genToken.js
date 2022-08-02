const generateToken = () => {
  const rand = Math.random(0).toString(36).substring(2);
  const token = (rand + rand).substring(0, 12);
  return token;
}

module.exports = generateToken;