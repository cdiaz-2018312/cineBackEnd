const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'you must put your name']
    },
    surname: {
        type: String,
        required: [true, 'you must put your surname' ],
    },
    email: {
        type: String,
        required: [true, 'you must put your email' ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'you must put your password' ] 
    },
    cellphone: {
        type: Number,
        required: false 
    },
   functs: [{                                // Agregué el campo 'cuentas' como un arreglo
        type: Schema.Types.ObjectId,
        ref: 'Function',
        default: []
    }]
    
});


module.exports = model('User', UserSchema);