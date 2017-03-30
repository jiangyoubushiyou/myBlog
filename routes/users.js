var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.send('hello, ' + req.parame.name);
});
module.exports = router;
