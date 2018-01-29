var express = require('express')
var Twitter = require('twitter');
var router = express.Router()


router.get('/', function(req, res, next){
  // this info can be found here https://apps.twitter.com/app/14740619/keys
  var client = new Twitter({
    consumer_key: 'es5si2IRTYPCI2TjDvbOi1fjO',
    consumer_secret: 'xtoAwL1VgpJ2m3FT2eDCKhOZhkhifxI8RtljAfFtRfQViU9tDC',
    access_token_key: '958055225092341760-VnjsGRMZ44MqAHgECPLa2HK4FGSNNbQ',
    access_token_secret: 'DuRSX4YcKri0PJgu7CiEim3PXzgTJVKgyEHG0GRIlF9et'
  });
  res.send({
    confirmation: 'success',
  })
})

module.exports = router;
