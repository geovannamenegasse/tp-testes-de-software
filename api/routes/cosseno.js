var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cosseno', { title: 'Calculadora' });
  });
  
  router.post('/rads', function(req, res, next) {
    res.render('cosseno', { resultado: Calculadora.cossenoRads(parseFloat(req.body.num))});
  });
  
  router.post('/graus', function(req, res, next) {
      res.render('cosseno', { resultado: Calculadora.cossenoGraus(parseFloat(req.body.num))});
    });

module.exports = router;
