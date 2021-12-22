const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/configDB')

class Server {
    constructor(){
        this.app = express();  
        this.port = process.env.PORT;
        this.Path = {
            login: '/api/login',
            user: '/api/user',
            matriz: "/api/matriz",
            balance: "/api/balance"
        }

        // Conectar base de datos 
        this.conectarBD();

        // Middleware
        this.middleware();

        //Rutas de app
        this.routes();
    }

    // Importar la base de datos
    async conectarBD(){
        await dbConnection();
    }

    middleware(){
        // cors
        this.app.use(cors())

        // parceo y lectura del body 
        this.app.use(express.json());

        // // Directorio publico
        // this.app.use(express.static('public')) // Muestra la pagina de inicio de la app
    }

    routes(){
        this.app.use(this.Path.login, require('../routes/auth'))
        this.app.use(this.Path.user, require('../routes/user'))
        this.app.use(this.Path.matriz, require('../routes/matrizNumber'))
        this.app.use(this.Path.balance, require('../routes/balance'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Server listening at port: ${this.port}`)
        });
    }


}

module.exports = Server;