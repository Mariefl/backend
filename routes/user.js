const express = require('express');
const router = express.Router();
const userC = require('../controllers/usersC');

router.post('/register' , userC.register);
router.post('/login' ,userC.login)


module.exports = router;
