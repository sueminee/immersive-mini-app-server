var express = require('express');
var router = express.Router();
var Images = require('../db/schema');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('안녕안녕')
  Images.find({})
  .then(data => res.send(data))
});

module.exports = router;
