var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('potencia', { title: 'Calculadora' });
});

router.post('/', function(req, res, next) {
  res.render('potencia', { resultado: Calculadora.potencia(parseFloat(req.body.num1),parseFloat(req.body.num2))});
});

module.exports = router;
