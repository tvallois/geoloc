const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.post('/v1/addUser', (req, res) => {
});

router.get('/v1/getUser/:id', userController.getUserById);

router.get('/v1/getUsers', (req, res) => {

});

router.delete('/v1/deleteUser', (req, res) => {

});



module.exports = router;
