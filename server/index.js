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
      res.status(200).send(`Item number ${productId} added to outfit`);
    }
  });
});

app.delete('/outfit/:id', (req, res) => {
  const productId = req.params.id;
  db.removeFromOutfit(productId, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send();
    } else {
      res.status(200).send(`Item number ${productId} removed from outfit`);
    }
  });
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});

//Q&A section
app.get('/new_question/:id', (req, res) => {
  let productId = req.params.id;

  db.getQuestion(productId, (err, results) => {
    if (err) {
      res.status(500).send('Server Error: Failed to get quetions data.', err);
    } else {
      res.send(results);
    }
  });
});
