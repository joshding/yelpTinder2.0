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
//const listings = db.collection('listings');
client.search({
  location: 'san francisco, ca',
  limit:50
}).then(response => {
  //console.log(response.jsonBody.businesses[0]);

  // generateListing(
  // )
  const listings = response.jsonBody.businesses.map((business, index) => {
  const {name, image_url, url, review_count, categories, rating, location, price}= business
  const listing = generateListing(index+1, url, [image_url], `${location.address1}, ${location.city}, ${location.state}, ${location.zip_code}`, rating, price, review_count);
  return listing;
  })
  db.Business.insertMany(listings).then(() => console.log('inserted many'));

  //try to insert many into mongodb
}).catch(e => {
  console.log(e);
});
const generateRandomBoolean = () => {
  return Math.floor(Math.random() * 6) %2 === 0;
}
const generateListing = (businessId, yelpURL, images, address, rating, price, reviewCount) => {
  const listing = {businessId, rating, price, yelpURL, images, address, reviewCount};
  listing.isOpenNow = generateRandomBoolean();
  listing.isFavorite = false;
  return listing;
}