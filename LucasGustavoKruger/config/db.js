const host = 'localhost';
const port = 27017;
const instance = 'fameg';

const mongo = require('mongodb');
const monk = require('monk');
const database = monk(`${host}:${port}/${instance}`); 

module.exports = {
  connect: (req, res, next) => {
    req.db = database;
    next();
  }
}