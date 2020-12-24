const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoose!')
});

//schema
const businessSchema = new Schema({
  businessId: {
    type: Number,
    unique: true,
  },
  rating: Number,
  price: Number,
  name: String,
  yelpURL: String,
  images: Array,
  address: String,
  reviewCount: Number,
  isOpenNow:Boolean,
  isFavorite:Boolean,

});

const Business = mongoose.model('Business', businessSchema);
//possibly further details if favorited?
module.exports = {Business};