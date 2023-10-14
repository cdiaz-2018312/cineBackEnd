const { Router } = require('express');
const {  getFunctions } = require('../controller/funcionController');
const router = Router();

router.get("/getFunction", getFunctions);

module.exports = router;