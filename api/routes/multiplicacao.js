var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('multiplicacao', { title: 'Calculadora' });
});

router.post('/', function(req, res, next) {
  res.render('multiplicacao', { resultado: Calculadora.multiplicacao(parseInt(req.body.num1),parseInt(req.body.num2))});
});

module.exports = router;
