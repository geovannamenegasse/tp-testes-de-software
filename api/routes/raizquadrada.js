var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('raizquadrada', { title: 'Calculadora' });
});

router.post('/', function(req, res, next) {
  res.render('raizquadrada', { resultado: Calculadora.raizQuadrada(parseFloat(req.body.num1))});
});

module.exports = router;