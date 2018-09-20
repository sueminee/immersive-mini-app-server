var express = require('express');
var router = express.Router();
// var photo = require('../db/schema');

/* GET home page. */
router.get('/', function(req, res, next) {
  Images.find({})
  .then(data => console.log(data))
  // .then(data => {
  //   console.log(data);
  //   res.send(data);
  // })
});

module.exports = router;

