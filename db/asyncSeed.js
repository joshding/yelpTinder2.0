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
      getReviews(business)
    )
  )
  .catch(err => 'error getting business details')
  .then(promises => Promise.all(promises)).then(responses => responses.map((response) => {
    return JSON.parse(response.body)})).then(response => response.map(res => res.reviews)).then(reviews => updateDBreviews(reviews));

function updateDBreviews(reviews) {
  let array = []
  //console.log(reviews);
  for(var i = 1; i <=50; i++) {
    //console.log(reviews[(i-1)%5], i)
    array.push(db.Business.findOneAndUpdate({businessId:i}, {reviews:reviews[(i-1)%5]}));
  }
  return Promise.all(array);
}

function getReviews(bus) {
   return client.reviews(bus.alias)
  }

  getBusinesses(5)
    .then((businesses) =>
      businesses.map(business =>
        getBusinessDetails(business)
      )
    )
    .catch(err => 'error getting business details')
    .then(promises => Promise.all(promises))
    .then(responses => responses.map((response) => {
      return JSON.parse(response.body)
    }))
    .then(details => updateDBdetails(details));

  function updateDBdetails(details) {
    console.log(details.length);
    const options = details.map(detail =>
       {
      return {
        //images: detail.photos,
      categories: detail.categories,
      hours: detail.hours}
    }
    )
    let array = [];
    for(var i = 1; i <=50; i++) {
      array.push(db.Business.findOneAndUpdate({businessId:i}, options[(i-1)%5]));
    }
    return Promise.all(array);
  }

 function getBusinessDetails(bus) {
   return client.business(bus.alias)
 }





