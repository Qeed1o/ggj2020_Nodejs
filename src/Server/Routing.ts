import express, { Request, Response } from 'express';
import { UpdateAction, RandomizeAction } from '../Actions';
import { customGameField1, GameFieldDTO } from '../DTO/GameFieldDTO';
import { GameField } from '../Utils/globals';
import { UpdateCommandDTO } from '../DTO/UpdateCommandDTO';

class Router{
    private app : express.Application;
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        this.app.get('/getRandomGameField', (req: Request, res: Response) => {
            res.send(JSON.stringify(RandomizeAction(GameField), null, "\n"));
        });

        this.app.post('/update', (req: Request, res: Response) => {
            const command: UpdateCommandDTO = req.body;
            res.send(UpdateAction(GameField ,command));
        });

        this.app.get('/getGameField', (req: Request, res: Response) => { // Temporary method
            res.send(JSON.stringify(customGameField1));
        });
    }
}

export default Router;