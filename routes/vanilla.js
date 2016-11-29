var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  res.render('vanilla/'+req.params.id, { title: req.params.id });
});

module.exports = router;
