var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/phoenix');
});

router.get('/phoenix', (req, res) => {
  res.render('phoenix');
});

router.get('/griffin', (req, res) => {
  res.render('griffin');
});

router.get('/leviathan', (req, res) => {
  res.render('leviathan');
});

router.get('/kitsune', (req, res) => {
  res.render('kitsune');
});

module.exports = router;
