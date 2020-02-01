import express, { Request, Response } from 'express';
import { UpdateAction } from '../Actions';

class Router{
    private app : express.Application;
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        this.app.get('/', (req: Request, res: Response) => {
            res.send('test');
        });

        this.app.post('/update', (req: Request, res: Response) => {
            res.send(UpdateAction(req.body));
        });
    }
}

export default Router;