var express = require('express');
var router = express.Router();

// postの処理書く
router.post('/', function(req, res, next) {
    //postされたjsonの中身
    console.log(req.body)

    //ここにquery時の処理をごりごり書けばよいか？

    //ここまで

    //json返す
    res.send({ "title": 'the end' });
});

module.exports = router;
