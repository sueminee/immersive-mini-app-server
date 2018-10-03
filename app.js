var mongoose = require('mongoose');
mongoose.connect('mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

var cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var authorRouter = require('./routes/author');


app.use(cors())

app.use('/author', authorRouter);
app.use('/', indexRouter);




// var Imageschema = new mongoose.Schema({
//   format:  String,
//   width: Number,
//   height: Number,
//   filename: String,
//   id : Number,
//   author : String,
//   author_url : String,
//   post_url : String
// });


// app.get('/', (req, res) => {
//   console.log('안녕안녕')
//   Images.find({})
//   .then(data => res.send(data))
// });

// app.get('/author', (req, res) => {
//   console.log('리퀘스트파람스는 어디에 콘솔이 찌키까요?', req.query.name)
//   Images.find({author: req.query.name})
//   .then(data => {
//     res.send(data)
//     console.log(data)})
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/photos', photosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
