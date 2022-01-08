const mysql = require('mysql2');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
  }
});
const sendQuery = (query, cb) =>
  connection.query(query, (err, data) => {
    err ? cb(err, null) : cb(null, data);
  });

const getOutfit = (cb) => {
  const query = 'SELECT * FROM outfits';
  sendQuery(query, cb);
};

const addToOutfit = (productId, cb) => {
  const query = `INSERT INTO outfits (productid) VALUES (${productId})`;
  sendQuery(query, cb);
};

const removeFromOutfit = (productId, cb) => {
  const query = `DELETE FROM outfits WHERE productid=${productId}`;
  sendQuery(query, cb);
};

//Q&A section:
const getQuestion = (productId, cb) => {
  let queryString = `SELECT * FROM questions WHERE productId = ${productId} `;

  connection.query(queryString, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getOutfit,
  addToOutfit,
  removeFromOutfit,
  getQuestion,
};
