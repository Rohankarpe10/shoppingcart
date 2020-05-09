var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var mongoose = require ('mongoose');
var session = require('express-session')
var flash = require('connect-flash');
var MongoStore= require('connect-mongo')(session);
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(cors());
mongoose.connect("mongodb://localhost:27017/shopping-cart", {
    useNewUrlParser: true
  });


app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req.url);
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});
module.exports = app;
