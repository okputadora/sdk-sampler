var express = require('express')
var Twitter = require('twitter');
var router = express.Router()


router.get('/:action', function(req, res, next){
  var actions = ['search', 'timeline']
  var action = req.params.action
  if (actions[action] == -1){
    res.json({
      confirmation: 'fail',
      message: 'incorrect action'
    })
    return
  }
  // this info can be found here https://apps.twitter.com/app/14740619/keys
  // we're calling this client because we're a client of their server. so our
  // backend is also a client (to twitter)

  var client = new Twitter({
    consumer_key: 'es5si2IRTYPCI2TjDvbOi1fjO',
    // should be an environmental variable
    consumer_secret: 'xtoAwL1VgpJ2m3FT2eDCKhOZhkhifxI8RtljAfFtRfQViU9tDC',
    access_token_key: '958055225092341760-VnjsGRMZ44MqAHgECPLa2HK4FGSNNbQ',
    // should be an environmental variable
    access_token_secret: 'DuRSX4YcKri0PJgu7CiEim3PXzgTJVKgyEHG0GRIlF9et'
  })

  if (action == 'timeline'){
    var username = req.query.username
    console.log(username)
    var params = {user_name: 'nodejs'}
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (error) {
        console.log('couldnt get any tweets')
        res.json({
          confirmation: 'error2',
          message: error
        });
        return
      }
      console.log('no error');
      console.log(tweets);
      res.json({
        results: tweets
      })
      return
    })
  }
  if (action == 'search'){
    var search = req.query.term
    var params = {q: search}
    console.log(search);
    client.get('search/tweets', params, function(error, tweets, response) {
      if (error) {
        res.json({
          confirmation: 'error1',
          message: error
        });
        return
      }
      res.json({
        message: tweets
      })
    })
    return
  }
  // https://github.com/desmondmorris/node-twitter/tree/master/examples#search
  // link provides examples of different queries

})

module.exports = router;
