var express = require('express');
var router = express.Router();
var Images = require('../db/schema');

/* GET users listing. */
router.get('/', function(req, res, next) { 
  console.log('리퀘스트파람스는 어디에 콘솔이 찌키까요?', req.query.name)
  Images.find({author: req.query.name})
  .then(data => {
    res.send(data)
    console.log(data)})
});

module.exports = router;

