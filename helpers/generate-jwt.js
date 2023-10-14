const jwt = require('jsonwebtoken');


const generateJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid }

        jwt.sign( payload, process.env.SECRET_KEY_FOR_TOKEN, {
            expiresIn: '5h'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject('failed to generate token');
            } else {
                resolve( token );
            }

        } )

    } );

}
module.exports = {
    generateJWT
}
