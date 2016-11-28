var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('react', { title: 'vanilla' });
});

router.get('/checkbox', function(req, res, next) {
  res.render('react/checkbox', { title: 'vanilla' });
});

router.get('/radio', function(req, res, next) {
  res.render('react/radio', { title: 'radio' });
});

module.exports = router;
