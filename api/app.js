var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var logger = require('morgan');
var cons = require('consolidate');

var indexRouter = require('./routes/index');
var divisaoRouter = require('./routes/divisao');
var somaRouter = require('./routes/soma');
var subtracaoRouter = require('./routes/subtracao');
var multiplicacaoRouter = require('./routes/multiplicacao');
var potenciaRouter = require('./routes/potencia');
var fatorialRouter = require('./routes/fatorial');
var senoRouter = require('./routes/seno');
var cossenoRouter = require('./routes/cosseno');
var tangenteRouter = require('./routes/tangente');
var raizQuadradaRouter = require('./routes/raizquadrada');

var app = express();

// view engine setup
// app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/divisao', divisaoRouter);
app.use('/soma', somaRouter);
app.use('/subtracao', subtracaoRouter);
app.use('/multiplicacao', multiplicacaoRouter);
app.use('/potencia', potenciaRouter);
app.use('/fatorial', fatorialRouter);
app.use('/seno', senoRouter);
app.use('/cosseno', cossenoRouter);
app.use('/tangente', tangenteRouter);
app.use('/raizquadrada', raizQuadradaRouter);

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
