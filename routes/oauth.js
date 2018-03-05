const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

const oauthController = require('../controllers/oauth');

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.post('/', userController.login, oauthController.getAccessToken);

module.exports = router;
