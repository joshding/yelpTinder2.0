const db = require('./connection');
module.exports={
  findAll: (callback) => {
    db.Business.find().exec(callback);
  }
}