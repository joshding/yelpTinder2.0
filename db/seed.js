const db = require('./connection.js');
const KEY = require('../config.js');
const yelp = require('yelp-fusion');
const client = yelp.client(KEY.YELP_API_KEY);
// const businessSchema = new Schema({
//   businessId: {
//     type: Number,
//     unique: true,
//   },
//   rating: Number,
//   price: Number,
//   name: String,
//   yelpURL: String,
//   images: Array,
//   address: String,
//   reviewCount: Number,
//   isOpenNow:Boolean

// });
// seed the db with random data.

client.search({
  location: 'san francisco, ca',
  limit:50
}).then(response => {
  console.log(response.jsonBody.businesses.length);
  res.json(response.jsonBody.businesses)
}).catch(e => {
  console.log(e);
});
const generateRandomBoolean = () => {
  return Math.floor(Math.random() * 6) %2 === 0;
}
const generateListing = (businessId, yelpURL, images, address, rating, price, reviewCount => {
  const listing = {businessId, rating, price, yelpURL, images, address, reviewCount};
  listing.isOpenNow = generateRandomBoolean;
  listing.isFavorite = false;
  return listing;
}