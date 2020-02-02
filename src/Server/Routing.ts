import express, { Request, Response } from 'express';
import { UpdateAction, RandomizeAction, GetRoleAction } from '../Actions';
import { customGameField1, GameFieldDTO } from '../DTO/GameFieldDTO';
import { GameField, ConstGameField } from '../Utils/globals';
import { UpdateCommandDTO } from '../DTO/UpdateCommandDTO';
import { copy } from '../Utils/copyGameField';

class Router{
    private app : express.Application;
    private requestCount: number = 0;
    constructor(app : express.Application){
        this.app = app;
    }

    route(){
        this.app.post('/update', (req: Request, res: Response) => {
            const command: UpdateCommandDTO = req.body;
            GameField.rows = UpdateAction(copy(GameField), command).rows;
            res.send(JSON.stringify(copy(GameField)));
        });

        this.app.get('/getRole', (req: Request, res: Response) => {
            res.send(GetRoleAction(this.requestCount));
            this.requestCount++;
        });

        this.app.get('/getRandomGameField', (req: Request, res: Response) => {
            GameField.rows = RandomizeAction(copy(GameField)).rows;
            res.send(JSON.stringify(copy(GameField)));
        });

        this.app.get('/getGameField', (req: Request, res: Response) => { 
            res.send(JSON.stringify(copy(GameField)));
        });

        this.app.get('/coachGameField', (req: Request, res: Response) => {
            res.send(JSON.stringify(copy(ConstGameField)));
        })
    }
}

export default Router;