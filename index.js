const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/reverse', (req, res) => {
  const { text } = req.body;
  const reversedText = text.split('').reverse().join('');

  res.json({ reversedText });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
