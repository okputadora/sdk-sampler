const express = require('express')
const yelp = require('yelp-fusion');
var apiKey = 'MRZJyoUdGtueWf3e_N8s3nN3lbFUSD_Zu99OMgiRzWBW2dqr56q0qkSdAHxHbjIl1QUjLMwWhxqnCvhPb0agKc-h-fzL1h8oQCAwxfvd66SXvqUBOV4Ny6BlanZwWnYx'
const client = yelp.client(apiKey);
var router = express.Router()


router.get('/', function(req, res, next){
  var term = req.query.term
  var location = req.query.location
  'use-strict';
  console.log(location)
  client.search({
    term: term,
    location: location
  })
  .then(response => {
    response = response.jsonBody;
    console.log(response.businesses[0])  
    var content = {
      title: term+ " in " +location,
      data: response
    }
    // populate the yelp view with this content
    res.render('yelp', content);
  })
  .catch(err => {
    console.log(err);
  });
})

module.exports = router;
