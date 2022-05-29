var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fatorial', { title: 'Calculadora' });
});

router.post('/', function(req, res, next) {
  res.render('fatorial', { resultado: Calculadora.fatorial(parseFloat(req.body.num1))});
});

module.exports = router;
