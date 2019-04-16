const express = require('express');
const router = express.Router();
const userService = require('./app.service');

router.post('/authenticate', function(req, res, next){
    userService.handleAuthenticateRequest(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
});

module.exports = router;

