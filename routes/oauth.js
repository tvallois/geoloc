const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.post('/', userController.getUserByEmail);

module.exports = router;
