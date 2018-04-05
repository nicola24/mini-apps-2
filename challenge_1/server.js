const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  db.retreiveData((err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
