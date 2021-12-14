const router = require('express').Router();

const indexController = require('../controllers/index.controller.js');

router.get('/', indexController.displayIndex);

module.exports = router;
