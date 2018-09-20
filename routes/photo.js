var express = require('express');
var router = express.Router();
// var Images = require('../db/schema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('DB에 있는 거를 못가져 오고 있다....')
  // Images.find({})
  // .then(res => res.json())
  // .then(data => console.log(data));
  //   res.send(data);
});

module.exports = router;
