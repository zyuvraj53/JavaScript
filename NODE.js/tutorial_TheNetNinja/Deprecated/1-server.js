const http = require("http");

const server = http.createServer((req, res) =>{
  console.log('request made!');
  // console.log(req.url, req.method);

  console.log("The response obj will be given!!") 
  // console.log(res);
  
  res.setHeader('Content-Type', 'text/html');
  
  res.write('<head><link rel= "stylesheet" href = "#"></head>')
  res.write('<p>hello ninjas!</p>');
  res.write('<p>hello again ninjas!</p?');
  console.log(res);
  res.end();
});

server.listen(5000, 'localhost', function(){
  console.log('listening for request on port 5000!!!');
})
