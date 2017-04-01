var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.render('users', {
        name: req.params.name
    });//调用res.render函数渲染ejs模板，res.render 第一个参数是模板的名字，这里是 users 则会匹配 views/users.ejs
});//res.render 的作用就是将模板和数据结合生成 html
module.exports = router;
