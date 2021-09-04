const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
  console.log('request made!');
  console.log(req.url, req.method);
  
  res.setHeader('Content-Type', 'text/html');

  let path = "views";
  switch (req.url) {
    case '/':
      path += '/index.html'; 
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html'; 
      res.statusCode = 200;
      break;
    case '/about-me':
    res.setHeader('Location', '/about');
    res.statusCode = 301;
    res.end();
      break;
    default:
      path += '/404.html'
      res.statusCode = 404;
      break;
  }
  
  //set header content type
  res.write('<head><link rel= "stylesheet" href = "#"></head>');

  //send an html file
  fs.readFile(path, function(err, data){
    if(err){
      console.error(err);
      res.end();
    }else{
      // res.write(data);//If you're doing one thing, then you don't need to write it,
      res.end(data);//you can pass it directly in the end
    }
  })
});

server.listen(5000, 'localhost', function(){
  console.log('listening for request on port 5000!!!');
})
