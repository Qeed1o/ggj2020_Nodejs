import { GameFieldDTO, PipeDTO, UpdateCommandDTO } from "../DTO";
import { actions } from "../Utils/globals";
import { copy } from "../Utils/copyGameField";

const Move = (gameField: GameFieldDTO, {currentCol, currentRow, newCol, newRow}: UpdateCommandDTO): GameFieldDTO => {
    const tmp: PipeDTO = gameField.rows[currentRow][currentCol];
    gameField.rows[currentRow][currentCol] = gameField.rows[newRow][newCol];
    gameField.rows[newRow][newCol] = tmp;
    console.log("[UpdateAction]: Move newGameField");
    return gameField;
}

const Rotate = (gameField: GameFieldDTO, {currentCol, currentRow}: UpdateCommandDTO): GameFieldDTO => {
    const cell: PipeDTO = gameField.rows[currentRow][currentCol];
    cell.entryPositions[0] = (cell.entryPositions[0] + 1) % 4;
    cell.entryPositions[1] = (cell.entryPositions[1] + 1) % 4;
    cell.entryPositions.sort();
    gameField.rows[currentRow][currentCol] = cell;
    return gameField;
}

export function UpdateAction(gameField: GameFieldDTO ,command: UpdateCommandDTO): GameFieldDTO {
    let response:GameFieldDTO = copy(gameField);

    switch (command.action) {
        case actions.Move:
            console.log(`[UpdateAction]: Move`);
            response = Move(response, command);
            break;

        case actions.Rotate:
            console.log(`[UpdateAction]: Rotate`);
            response = Rotate(response, command);
            break;
    }
    return copy(response);
}