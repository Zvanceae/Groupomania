const express = require('express');
const router = express.Router();

const auth = require('../Middleware/jwt.js');

// Import controllers
const signup = require('../Controllers/User/signup.js').signup;
const login = require('../Controllers/User/login.js').login;
const editUser = require('../Controllers/User/editUser.js').editUser;

router.post('/signup', signup);
router.post('/login', login);

router.put('/editUser', auth, editUser);


module.exports = router;