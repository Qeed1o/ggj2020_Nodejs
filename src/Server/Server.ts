import express from 'express';
import bodyParser from 'body-parser';
import Router from './Routing'

class Server{
    private app : express.Application;
    private port: number = 3000;
    private router: Router;

    constructor(){
        this.app = express();
        this.router = new Router(this.app);
        this.app.use(bodyParser.json());
    }

    run(){
        this.router.route();
        this.app.listen(this.port, function () {
            console.log("Listen...");
        });
    }

    getPort(){
        return this.port;
    }
}

export default Server;