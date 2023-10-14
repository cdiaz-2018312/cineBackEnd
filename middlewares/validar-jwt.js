const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const validarJWT = async( req = request, res= response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'Petition without Token'
        })
    } 
    try {
        const { uid } = jwt.verify( token, process.env.SECRET_KEY_FOR_TOKEN);

        const usuario = await User.findById( uid );
        //Verificar si el uid del usuario no existe
        if ( !usuario ) {
            return res.status(401).json({
                msg: 'invalid token - this user do not exists '
            })
        }
        
        req.usuario = usuario;
        next(); 
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'invalid Token'
        })
    }


}



module.exports = {
    validarJWT
}