const db = require('./connection');
module.exports={
  findAll: (callback) => {
    db.Business.find().exec(callback);
  },
  toggleFavorite: (businessId, callback) => {
    db.Business.findOne({businessId}).then((data) => {
    db.Business.findOneAndUpdate({businessId}, {isFavorite: !data.isFavorite}).exec(callback)
    }
    )
  },
  resetFavorites: (callback) => {
    db.Business.updateMany( {$set: { isFavorite: false }}).exec(callback);
  },
  getFavorites: (callback) => {
    db.Business.find({isFavorite:true}).exec(callback);
  }
}