// --- --- --- --- --- --- --- --- --- --- ---
//All the requires
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blog = require("./models/blog");
const Blog = require("./models/blog");
// --- --- --- --- --- --- --- --- --- --- ---

const app = express();
// --- --- --- --- --- --- --- --- --- --- ---

//connect to mongoDB
const dbURI =
  "mongodb+srv://netninja:27octyuvrajsingh@nodetuts.o6bqr.mongodb.net/nodetuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
// --- --- --- --- --- --- --- --- --- --- ---

//Setting up and using views
app.set("view engine", "ejs");
app.use(express.static("public/css"));
// --- --- --- --- --- --- --- --- --- --- ---

app.use(morgan("dev"));

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New blog",
    snippet: "About my new blog",
    body: "More about my new blog",
  });

  blog
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("611a4657accf4545549f56ff")
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Writing and rendering on the webpage
app.get("/", function (req, res) {
  res.redirect("/blogs");
});

app.get("/about", function (req, res) {
  res.render("about", { title: "About" });
});

//Blog routes
app.get("/blogs", (req, res) => {
  Blog.find().then((result) => {
    res.render('index', {title: 'All Blogs', blogs: result});
  }).catch((err) => {
    console.log(err); 
  });
});

app.get("/blogs/create", function (req, res) {
  res.render("create", { title: "Create a new Blog." });
});

app.use(function (req, res) {
  res.status(404).render("404", { title: "Error" });
});
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
