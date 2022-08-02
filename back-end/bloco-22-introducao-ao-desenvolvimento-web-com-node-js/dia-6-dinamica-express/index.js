const express = require('express');
const bodyParser = require('body-parser');
const { validateUsername, validateEmail, validatePassword } = require('./validateData');
const generateToken = require('./genToken');

const app = express();

app.use(bodyParser.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  
  if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
    res.status(201).json({ message: 'user created'});
  }
  
  res.status(400).json({ message: 'invalid data' });
});

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  if (validateEmail(email) && validatePassword(password)) {
    res.status(200).json({ token: generateToken() });
  }
  
  res.status(400).json({ message: 'email or password is incorrect' });
});

app.listen(3000, () => {
  console.log('Escutando porta 3000');
});