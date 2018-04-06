const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

console.log(db.insertCheckout);

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  db.insertCheckout(req.body, (err, result) => {
    if (err) res.status(500).send(err);
    res.status(201).send();
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
