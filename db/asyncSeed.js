const db = require('./connection.js');
const KEY = require('../config.js');
const yelp = require('yelp-fusion');
const { response } = require('express');
const client = yelp.client(KEY.YELP_API_KEY);
// function get 50 business
function getBusinesses (num) {
  return client.search({
    location: 'san francisco, ca',
    limit:num
  }).then(response => response.jsonBody.businesses)
}

getBusinesses(5)
  .then((businesses) =>

    businesses.map(business =>
      getBusinessDetails(business)
    )
  ).catch(err => 'error getting business details').then(promises => Promise.all(promises)).then(responses => responses.map((response) => {
    return JSON.parse(response.body)})).then(response => response.map(res => res.reviews)).then(console.log);

function saveToDB(businesses) {
  businesses.forEach((business, index)=> {
    db.Business.save()
  })
}

function getBusinessDetails(bus) {
   return client.reviews(bus.alias)
    //  .then(response => {
    //    return JSON.parse(response.body);
  //     const {name, image_url, url, review_count, categories, rating, location, price}= bus

  // const listing = generateListing(index+1, url, [image_url], `${location.address1}, ${location.city}, ${location.state}, ${location.zip_code}`, rating, price, review_count, name, details.categories, [], details.display_phone, details.hours[0].open, details.is_claimed);

  // return listing;

}
// get 50 ids from yelp,
//for each id, get details,
// then console.log details.

// //function get details
// // function
// client.search({
//   location: 'san francisco, ca',
//   limit:50
// }).then(response => {
//   //console.log('business search: ',response.jsonBody.businesses[0]);
//   //const bus = response.jsonBody.businesses[0];
//   const businesses = response.jsonBody.businesses
//   console.log('here is businesses length: ', businesses.length);
//   var array = [];
//   array = businesses.map((bus, index) => {
//     return new Promise(function(resolve, reject) {



//    client.business(bus.alias).then(response => {
//     const details = JSON.parse(response.body);
//       const {name, image_url, url, review_count, categories, rating, location, price}= bus

//   const listing = generateListing(index+1, url, [image_url], `${location.address1}, ${location.city}, ${location.state}, ${location.zip_code}`, rating, price, review_count, name, details.categories, [], details.display_phone, details.hours[0].open, details.is_claimed);

//   return listing;
//    })

//   }).catch((err) => {
//     if(err) {
//       //console.log('here is error: ', err)
//     }
//   });

//   // console.log('here is awaitResult: ', awaitResult)

// });
// Promise.all(array).then(results=> console.log('here are results: ', results))



// }).catch(e => {
//   console.log(e);
// });
// const generateRandomBoolean = () => {
//   return Math.floor(Math.random() * 6) %2 === 0;
// }
// const generateDistance=() => {
//  return (Math.random()* 9).toFixed(1)
// }
// const generateListing = (businessId, yelpURL, images, address, rating, price, reviewCount, name,categories, reviews,phoneNumber, hours, isClaimed) => {
//   const listing = {businessId, rating, price, yelpURL, images, address, reviewCount,name, categories, reviews, phoneNumber, hours, isClaimed};
//   listing.isOpenNow = generateRandomBoolean();
//   listing.isFavorite = false;
//   listing.distance=generateDistance();
//   return listing;
// }

// function saveBookAsync(book) {
//   return new Promise(function(resolve, reject) {
//       new Book(book).save(function(err) {
//           if (err)
//               reject(err);
//           else
//               resolve();
//       })
//   });
// }