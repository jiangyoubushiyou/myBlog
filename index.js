var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// ���ô��ģ���ļ���Ŀ¼
app.set('view engine', 'ejs');// ����ģ������Ϊ ejs

app.use('/', indexRouter);
app.use('/users', userRouter);
app.listen(3000);