var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')

var index = require('./routes/index');
var user = require('./routes/user');
var list = require('./routes/list');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'wenzi', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60*60*1000 },
  resave : false,
  saveUninitialized : true
}));

app.use(function(req, res, next){
	// 如果cookie中存在，则说明已经登录
	if( req.session.user ){
		res.locals.user = {
			uid : req.session.user.uid,
			username : req.session.user.username
		}
	}else{
		res.locals.user = {};
	}
	next();
})

app.use('/', index);
app.use('/user', user);
app.use('/list', list);

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

module.exports = app;
