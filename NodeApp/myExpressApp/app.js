var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Hello!");
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

app.listen(3000);














//var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
