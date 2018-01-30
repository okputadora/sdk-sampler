const express = require('express')
const yelp = require('yelp-fusion');
var apiKey = 'MRZJyoUdGtueWf3e_N8s3nN3lbFUSD_Zu99OMgiRzWBW2dqr56q0qkSdAHxHbjIl1QUjLMwWhxqnCvhPb0agKc-h-fzL1h8oQCAwxfvd66SXvqUBOV4Ny6BlanZwWnYx'
const client = yelp.client(apiKey);
var router = express.Router()


router.get('/', function(req, res, next){
  'use-strict';
  client.search({
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
  })
  .then(response => {
    console.log(response.jsonBody.businesses[0].name);
    res.json(response.jsonBody.businesses[0]);
  })
  .catch(err => {
    console.log(err);
  });
})

module.exports = router;
