const mysql = require('mysql2');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

const getOutfit = (cb) => {
  const query = 'SELECT * FROM outfits';
  connection.query(query, (err, data) => {
    err ? cb(err, null) : cb(null, data);
  });
};

const addToOutfit = (productId, cb) => {
  const query = `INSERT INTO outfits (productid) VALUES (${productId})`;
  connection.query(query, (err, data) => {
    err ? cb(err, null) : cb(null, data);
  });
};

const removeFromOutfit = (productId, cb) => {
  const query = `DELETE FROM outfits WHERE productid=${productId}`;
  connection.query(query, (err, data) => {
    err ? cb(err, null) : cb(null, data);
  });
};

module.exports = {
  getOutfit,
  addToOutfit,
  removeFromOutfit,
};
