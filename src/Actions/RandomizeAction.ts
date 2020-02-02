import { GameFieldDTO, UpdateCommandDTO } from "../DTO";
import { UpdateAction } from "./UpdateAction";
import { copy } from "../Utils/copyGameField";
import { actions } from "../Utils/globals";

export function RandomizeAction(gameField: GameFieldDTO): GameFieldDTO{
    let gf: GameFieldDTO = copy(gameField);
    let 
        action: actions, 
        currentCol:number, 
        currentRow:number, 
        newCol:number,
        newRow:number;

    for(let i = 0; i < 10; i++){
        action = actions[Math.random() > 0.5 ? "Move" : "Rotate"];
        console.log(`[RandomizeAction]: ${action}`);
        currentCol = ~~(Math.random() * 4 + 0.5);
        currentRow = ~~(Math.random() * 4 + 0.5);
        newCol = null; newRow = null;

        if (action == "move"){
            newCol = ~~(Math.random() * 4 + 0.5),
            newRow = ~~(Math.random() * 4 + 0.5);
        }
        
        let command: UpdateCommandDTO = {action, currentRow, currentCol, newRow, newCol};
        gf = UpdateAction(copy(gf), command);
    }

    return gf;
}