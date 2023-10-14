const mongoose = require('mongoose');

 const dbConnection = async() => {
    try {
        mongoose.set("strictQuery",false);
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log("Se establecio conexion con la db");
    } catch (error) {
        throw new Error ("Error, no se pudo conectar la db")
    }
}
module.exports = {dbConnection}