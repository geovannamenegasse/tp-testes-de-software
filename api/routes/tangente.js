var express = require('express');
var router = express.Router();
const Calculadora = require('../services/Calculadora')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tangente', { title: 'Calculadora' });
  });
  
  router.post('/rads', function(req, res, next) {
    res.render('tangente', { resultado: Calculadora.tangenteRads(parseFloat(req.body.num))});
  });
  
  router.post('/graus', function(req, res, next) {
      res.render('tangente', { resultado: Calculadora.tangenteGraus(parseFloat(req.body.num))});
    });

module.exports = router;
