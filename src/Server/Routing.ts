import express, { Response } from 'express';

class Router{
    private app : express.Application;
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        this.app.get('/', (req: Express.Request, res: Response) => {
            res.send('for');
        });
    }
}

export default Router;