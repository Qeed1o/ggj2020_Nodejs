import { GameFieldDTO, UpdateCommandDTO } from "../DTO";
import { UpdateAction } from "./UpdateAction";
import { copy } from "../Utils/copyGameField";
import { actions } from "../Utils/globals";

export function RandomizeAction(gameField: GameFieldDTO): GameFieldDTO{
    let gf: GameFieldDTO = copy(gameField);
    let action, currentCol, currentRow, newCol, newRow;
    console.log(gf);
    for(let i = 0; i < 10; i++){
        action = actions[Math.random() > 0.5 ? "Move" : "Rotate"];
        // console.log(`[RandomizeAction]: ${action}`);
        currentCol = ~~(Math.random() * 4);
        currentRow = ~~(Math.random() * 4);
        newCol = null; newRow = null;

        if (action == "rotate"){
            newCol = ~~(Math.random() * 4),
            newRow = ~~(Math.random() * 4);
        }
        
        let command: UpdateCommandDTO = {action, currentRow, currentCol, newRow, newCol};
        gf = UpdateAction(copy(gf), command);
    }

    return gf;
}