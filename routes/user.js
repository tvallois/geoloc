const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/v1/getUser/:id', userController.getUserById);

router.post('/v1/addUser', userController.addNewUser);

router.get('/v1/getUsers', userController.getUsers);

router.delete('/v1/deleteUser', userController.removeUser);

module.exports = router;
