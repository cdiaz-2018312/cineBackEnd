const { Router } = require('express');
const { check } = require('express-validator');

const {  getFunctionsByUser,getUsersById,postFunct,postUser } = require('../controller/userController');
const {  emailExists} = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');

const { validarJWT} = require('../middlewares/validar-jwt');
const router = Router();

router.get("/getFunctUser", [validarJWT], getFunctionsByUser);
router.get('/showById', getUsersById);

router.post('/postUser', [
  validateFields,
    check('name', 'the name is empty!').not().isEmpty(),
  check('email', 'are you sure to send this email? whaat?').isEmail(),
  check('surname', 'the surname is empty!').not().isEmpty()
,check('password', 'password length must be 6 elements').isLength({ min: 6 }),
  check('email').custom(emailExists),
], postUser);

router.post('/postFunctUser',
[check("idFunction","this field do not beempty").not().isEmpty()]
,postFunct);


module.exports = router;
