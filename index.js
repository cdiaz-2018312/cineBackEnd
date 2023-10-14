require ('dotenv').config()
const Server = require('./model/server')
const serverIniciado = new Server()
serverIniciado.listen();