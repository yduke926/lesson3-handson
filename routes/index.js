var express = require('express');
var router = express.Router();
var beginning = require('../models/beginning');
var middle = require('../models/middle');
var end = require('../models/end');

/*GET home page.*/
router.get('/', function (req, res, next){
  res.render('index', {
    title: 'Express'
  });
});
router.get('/beginning', function(req, res, next) {
  res.render('beginning', {
    story: beginning.storyBeginning
  });
});
  router.get('/middle', function(req, res, next) {
    res.render('middle', {
      story: middle.storyMiddle
    });
});
router.get('/end', function(req, res, next){
  res.render('end', {
    story: end.storyEnd
  });
});
module.exports = router;