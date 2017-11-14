var express = require("express");
var app = express();

// tells express to serve the public folder 
app.use(express.static("public"));

// serve node modules folder
app.use("/node_modules", express.static('node_modules'));

// changes it so render doesnt need to have ejs extension
// app.set("view engine", "ejs");

// ejs templating example
app.get("/", function(req, res){
    var user = "Austin";
    res.render("home.ejs", {user: user});
});

// added a post 
app.post("/post", function(req, res){
    res.send("This is the post endpoint");
    console.log("post api hit");
});

// ":" tells the app it will have a variable after 
app.get("/r/:name", function(req, res){
    // will log the route parameter sent in
    // could do another get with this
    var subreddit = req.params.name;
    res.send("Welcome to the " + name + " subreddit!");
  });
  
  app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
  });
  
  app.get("/repeat/:string/:num", function(req, res){
    var string = req.params.string;
    var result = "";
    var num = req.params.num;
    for(var i = 0; i < num; i++){
      result += " " + string;
    }
    res.send(result);
  });
  
  // "*" is a catch all and will return if nothing else is found
  app.get("*", function(req, res){
    res.send("Route not found!");
  });

app.listen(3000, function(){
    console.log("Server Started!");
});