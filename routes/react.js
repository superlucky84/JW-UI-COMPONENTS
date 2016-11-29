var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  res.render('react/'+req.params.id, { title: req.params.id });
});

module.exports = router;
