const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
})