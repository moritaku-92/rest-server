var express = require('express');
var router = express.Router();

var test1 = require('../src/test1.js')
var test2 = require('../src/test2.js')

// postの処理書く
router.post('/', function (req, res, next) {
    //postされたjsonの中身
    console.log(req.body)

    //ここにquery時の処理をごりごり書けばよいか？ ここまで json返す
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send({"title": 'the end'});
});

// ----------------------test----------------------
router.get('/test1', function (req, res, next) {
    test1.test(100, 200);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send({"title": 'the end'});
});
router.get('/test2', function (req, res, next) {
    var aaa = test2.test()
    console.log("result=>" + aaa)
    var bbb = {"test2":aaa}
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(bbb);
});
// ----------------------test----------------------

module.exports = router;
