var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
  res.render('index', { title: 'Acxiom', home : "1" });
});

module.exports = router;
