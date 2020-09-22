const router = require('express').Router();
const sheetsController = require('./controllers');

router.get('/', sheetsController.main);

module.exports = router;
