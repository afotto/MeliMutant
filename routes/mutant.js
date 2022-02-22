var express = require('express');
var router = express.Router();
const mutantController = require('../controllers/mutant')

router.get('/', mutantController.isMutant);

module.exports = router;
