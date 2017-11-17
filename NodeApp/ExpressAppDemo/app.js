var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// tells express to serve the public folder 
app.use(express.static("public"));

// serve node modules folder
app.use("/node_modules", express.static('node_modules'));

// changes it so render doesnt need to have ejs extension
// app.set("view engine", "ejs");
app.use(bodyParser.json());

// ejs templating example
app.get("/", function(req, res){
    var user = "Austin";
    res.render("home.ejs", {user: user});
});

// store todos in array
var todos = ["Get Milk", "Get Eggs", "Get Bread"];

// gets todos
app.get("/todo", function(req, res){
  res.send(todos);
});

// get by id
app.get("/todo/:id", function(req, res){
  var id = req.params.id;
  var selectedTodo = todos[id];
  console.log(selectedTodo);
  res.send(selectedTodo);
});

// adds todos
app.post("/todo", function(req, res){
  var newTodo = req.body.todo;
  todos.push(newTodo);
  res.send('Successfully posted');
});

// edits todos
app.put("/todo/:id", function(req, res){
  var todoIndex = req.params.id;
  var todoData = req.body.todo;
  console.log(todoIndex, todoData);

  todos[todoIndex] = todoData;
  
});

// deletes todos
app.delete("/todo/:id", function(req, res){
  var deleteTodo = req.params.id;
  todos.splice(deleteTodo, 1);
  res.send('Successfully Deleted');
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