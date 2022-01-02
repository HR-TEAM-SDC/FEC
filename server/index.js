const express = require('express');
const app = express();
const db = require('../database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../dist'));

app.get('/outfit', (req, res) => {
  db.getOutfit((err, outfit) => {
    if (err) {
      console.error(err.message);
      res.status(500).send();
    } else {
      res.status(200).send(outfit);
    }
  });
});

app.post('/outfit', (req, res) => {
  const productId = req.body.id;
  db.addToOutfit(productId, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send();
    } else {
      res.status(200).send(`Item with ${productId} added to outfit`);
    }
  });
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
