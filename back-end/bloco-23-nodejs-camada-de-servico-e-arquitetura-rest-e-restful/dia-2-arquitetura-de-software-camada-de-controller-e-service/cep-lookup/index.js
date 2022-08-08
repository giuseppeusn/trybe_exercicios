const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

const route = require('./routes/cepRoute.js');

app.use(express.json());


app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
})

app.use('/cep', route);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));