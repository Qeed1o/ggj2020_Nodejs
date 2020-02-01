import { GameFieldDTO, PipeDTO } from "../DTO";
import { GameField, actions } from "../Utils/globals";
import { UpdateCommandDTO } from "../DTO/UpdateCommandDTO";

const Move = (gameField: GameFieldDTO, {currentCol, currentRow, newCol, newRow}: UpdateCommandDTO): GameFieldDTO => {
    const tmp: PipeDTO = gameField["rows"][currentRow][currentCol];
    gameField["rows"][currentRow][currentCol] = gameField["rows"][newRow][newCol];
    gameField["rows"][newRow][newCol] = tmp;
    console.log("[UpdateAction]: Move newGameField");
    return gameField;
}

export function UpdateAction(command: UpdateCommandDTO): Object {
    const PipesRotationArray: Array<number> = [0, 90, 180, 270];
    let response: GameFieldDTO;

    switch (command.action) {
        case actions.Move:
            console.log(`[UpdateAction]: Move`);
            response = Move(GameField, command);
            break;

        // case actions.Rotate:
        //     const newRotation: number = 
        //         prevRotation + 1 % PipesRotationArray.length;
        //     console.log(`[UpdateAction]: Rotate`);
        //     break;
    }
    return response;
}