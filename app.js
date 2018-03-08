const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const knex = require('./db');
const PORT = process.env.PORT || 8082;

const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');

// load routes
// const index = require('./routes/index');
const routes = require('./routes/studentInfoTableRoutes');


// middleware
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
app.use('/', routes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Listening
// takes two arguments, the PORT variable and an anonymous function
//
// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// })

module.exports = app;
