var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('vanilla', { title: 'vanilla' });
});

router.get('/checkbox', function(req, res, next) {
  res.render('vanilla/checkbox', { title: 'vanilla' });
});

router.get('/radio', function(req, res, next) {
  res.render('vanilla/radio', { title: 'radio' });
});

module.exports = router;
