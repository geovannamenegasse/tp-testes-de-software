var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('subtracao', { title: 'Calculadora' });
});

router.post('/', function(req, res, next) {
  res.render('subtracao', { resultado: Calculadora.subtracao(parseInt(req.body.num1),parseInt(req.body.num2))});
});

module.exports = router;
