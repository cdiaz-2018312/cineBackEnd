const { Router } = require('express');
const { check } = require('express-validator');

//Controllers
const { loginUser } = require('../controller/authController');
// Middlewares
const {  validateFields } = require('../middlewares/validate-fields');


const router = Router();

router.post('/login', [
    check('email', 'put an email').not().isEmpty(),
    check('email', 'is not an email').isEmail(),
    check('password', "put your password").not().isEmpty(),
    validateFields,
] ,loginUser);


module.exports = router;