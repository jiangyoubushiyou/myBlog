var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.render('users', {
        name: req.params.name
    });//����res.render������Ⱦejsģ�壬res.render ��һ��������ģ������֣������� users ���ƥ�� views/users.ejs
});//res.render �����þ��ǽ�ģ������ݽ������ html
module.exports = router;
