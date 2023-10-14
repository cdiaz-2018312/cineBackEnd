const {validationResult} = require('express-validator')
const {request,response,next} = require('express')
const Productos = require('../model/producto')

const validarCamposObligatorios = (req = request,res=response,next) =>{
    const {precio,nombre}= req.body
    console.log(precio, nombre);
    
    if (precio === undefined || precio === ""){
            return res.status(400).json({
            errors: [{msg: 'el campo precio esta vacio, y es obligatorio'}] 
            })   
    }
    if (nombre === undefined || nombre ===""){
        res.status(400).json({
            errors:[{msg: 'el campo nombre esta vacio y es obligatorio'}]
        })
    }
    next();
}

const validarParametros = async(req = request,res=response,next) =>{
    const parametros = req.params
    
    if (!parametros || parametros === null || parametros === undefined){
        return res.status(400).json({
            errors: [{msg: 'no hay ningun parametro a buscar (id en ruta)'}]
        })
    }
    next()
}

module.exports={
    validarCamposObligatorios,
    validarParametros
}