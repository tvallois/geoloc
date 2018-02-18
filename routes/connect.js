const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', (req, res) => {
  res.render('connect');
});

module.exports = router;
