const { response, request } = require('express');
const bcrypt = require('bcryptjs');
//Importación del modelo
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const Function = require("../model/Function")



const postUser = async (req = request, res = response) => {
    //Desestructuración
    const functs = [];
    const { name, surname, email, password, cellphone } = req.body;
    
    const data = {
        name,
        surname, 
        email,
        password,
        cellphone,
        functs: [...functs]
    }
    const userGuardadoDB = new User(data);
    //Encriptar password
    const salt = bcrypt.genSaltSync();
    userGuardadoDB.password = bcrypt.hashSync(password, salt);

    //Guardar en BD
    await userGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post user',
        userGuardadoDB
    });
}
const postFunct = async (req = request, res = response) => {
   try {
       const token = req.header('x-token')
       const {uid} = jwt.verify(token,process.env.SECRET_KEY_FOR_TOKEN)
       const { idFunction } = req.body;
       const user = await User.findById(uid)

       const functionExists = await Function.findById(idFunction);
       
       if (!functionExists) {
        return res.status(400).json({
          message: 'this function do not exists'
        });
      }
       user.functs.push(idFunction)
       await user.save();
   
       res.json({
           msg: 'Post Api - post funtion to user',
           function: idFunction
       });
   } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'cannot add this function'
    });
  }
}

const getUsersById = async (req = request, res = response) => {
    const  token  = req.header('x-token');
    const { uid } = jwt.verify(token, process.env.SECRET_KEY_FOR_TOKEN);
    try {

        const UserId = await User.findById(uid);
        if (!UserId) {
            return res.status(401).json({
                msg: ` User ${uid} do not exists `
            })
        }
        res.status(201).json(UserId);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server Error'
        });
    }
};


const getFunctionsByUser = async (req, res) => {
    try {
      const token = req.header('x-token');
      const { uid } = jwt.verify(token, process.env.SECRET_KEY_FOR_TOKEN);
      const usuario = await User.findById(uid)
  
      if (!usuario) {
        return res.status(404).json({
          message: 'User not found in DB'
        });
      }
      
      const usersWithFuncts = await User.findById(usuario._id).populate({
        path: 'functs',
        populate: {
          path: 'movie',
        },
      });
  
      res.json({
       usersWithFuncts: usersWithFuncts.functs
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `cannot get functions by this user` 
      });
    }
  };
  
 


module.exports = {
    postUser,
    getUsersById,
    getFunctionsByUser,
    postFunct
}

