const express = require('express');

const app = express();

//register view engines
app.set('view engine', 'ejs');
// app.set('views')

//listen for requests
app.listen(3000);

app.get('/', function(req, res){
  // res.send('<p>Home Page</p>');
  // res.sendFile('./views/index.html', {root: __dirname});
  res.render('z_1-indexhtml');
})

app.get('/about', function(req, res){
  // res.send('<p>About Page</p>');
  // res.sendFile('./views/about.html', {root: __dirname});
  res.render('z_2-abouthtml');
})

//redirect
app.get('/about-me', function(req, res){
  // res.send('<p>About Page</p>');
  res.redirect('/about')
})

//404 page
app.use(function(req, res){
  // res.status(404).sendFile('./views/404.html', {root: __dirname});
  res.render('z_3-404html');
})
