var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('seno', { title: 'Calculadora' });
});

router.post('/rads', function(req, res, next) {
  res.render('seno', { resultado: Calculadora.senoRads(parseFloat(req.body.num))});
});

router.post('/graus', function(req, res, next) {
    res.render('seno', { resultado: Calculadora.senoGraus(parseFloat(req.body.num))});
  });

module.exports = router;
