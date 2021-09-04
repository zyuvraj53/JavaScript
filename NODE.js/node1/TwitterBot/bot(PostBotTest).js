console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
//var stream = T.stream('user');

//Anytime someone follows me
//stream.on('follow', followed);

//function followed(eventMsg){
//  var name = event.source.name;
//  var screenName = eventMsg.source.screen_name;
//  tweetIt('@' + screenName + ' do you like rainbows?');
//}

//The code below just tweets at an interval (whatever
// you give it)
//setInterval(tweetIt, 1000*5)

tweetIt();

//var txt = "hello";

function tweetIt(){

    //var r = Math.floor(Math.random()*100);

    var tweet = {
      status: 'eh'
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
      if(err){
        console.log(data);
      }else{
        console.log("It worked!");
      }
    }

}
