var express = require('express');
var router = express.Router();
var user = require('../module/index.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('film');
});

 router.get('/bad', user.index);

module.exports = router;
