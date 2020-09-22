const router = require('express').Router();
const sheets = require('./sheets/routes');

router.get('/', (req, res) => {
  res.json({
    message: 'API =D'
  })
});

router.use('/sheets', sheets);

module.exports = router;
