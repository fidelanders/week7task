const path = require('path')
const express = require('express');
const indexRouter = require('./router');
const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRouter);

app.listen(3000)
console.log('listening on port 3000')
