const {dbConnection} = require('../database/config')
const express = require('express')
const cors = require('cors')
const { movie1,movie2,movie3,movie4,movie5} = require("../controller/movieController")
const {Function1,Function2,Function3,Function4,Function5,Function6,Function7,Function8,Function9,Function10} = require("../controller/funcionController")
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT 
        this.path = {
            user: '/api/user',
            auth: '/api/auth',
            movie: '/api/movie',
            funct: "/api/function"
        }

        this.conectarDB()
        this.middlewares();
        this.routes();

        movie1()
        movie2()
        movie3()
        movie4()
        movie5()
        Function1()
        Function2()
        Function3()
       /Function4()
        Function5()
        Function6()
        Function7()
        Function8()
        Function9()
        Function10()
    }
    middlewares() {
        // CORS
        this.app.use(cors());
    
        // Lectura y parseo del Body
        this.app.use(express.json());
    
        //Directorio publico
        this.app.use(express.static("public"));
      }
      //Función de conexión
      async conectarDB() {
        await dbConnection();
      }
//
    routes() {
        this.app.use(this.path['user'], require('../routes/user'));
        this.app.use(this.path['auth'], require('../routes/auth'));
        this.app.use(this.path['movie'], require('../routes/movie'));
        this.app.use(this.path['funct'], require('../routes/function'));
      }
      listen() {
        this.app.listen(this.port, () => {
          console.log("server listen on port: ", this.port);
        });
      }
    }
module.exports= Server 
