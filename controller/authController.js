const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const User = require('../model/User');

//Login Usuario Normal
const loginUser = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {

        const userdb = await User.findOne({ email });
        if (!userdb) {
            return res.status(400).json({
                msg: 'User or email are not correct'
            });
        }
        const validatePassword = bcrypt.compareSync(password, userdb.password);
        if (!validatePassword) {
            return res.status(400).json({
                msg: 'incorrect password bby'
            });
        }

        const token = await generateJWT(userdb.id);

        res.json({
            msg: 'Login PATH',
            email, password,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'contact with Us!, it seems you have some problems to login'
        });
    }

}
module.exports = {
    loginUser
}