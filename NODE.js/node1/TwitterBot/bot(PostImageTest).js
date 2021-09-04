console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var exec = require('child_process').exec;

var fs = require('fs');

//setInterval(tweetIt, 1000*5)

tweetIt();

function tweetIt(txt){
    var cmd = "processing_java.exe --sketch=C:\Users\Yuvraj\Desktop\NODE.js\node1\TwitterBot\image --run"; // I took out the processing_java.exe
    exec(cmd, processing);

    function processing() {
      var filename = 'image/output.png';
      var params = {
        encoding: 'base64'
      }
      var b64 = fs.readFileSync(filename,params );

      T.post('media/upload', {media_data: b64}, uploaded);

      function uploaded(err, data, response){
        //This is where I will tweet!
        var id = data.media_id_string;
        var tweet = {
          status: 'I am postingthis  from node'
        //  media_id: data.media_id_string
        }
      }
    }

    //var r = Math.floor(Math.random()*100);

    var tweet = {
      status: 'I am posting from node'
      //media_ids: [id]
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
      if(err){
        console.log("Something went wrong!");
      }else{
        console.log("It worked!");
      }
    }

}
