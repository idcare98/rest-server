const express = require('express')
const cors = require('cors')

class Server{
    
    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.ususarioPath = '/api/usuarios';
        //middelwares
        this.middelwares();
        //routs
        this.routes();
    }

    middelwares(){
        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use( express.json());
        //public directory
        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use(this.ususarioPath, require('../routes/usuarios.js'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;