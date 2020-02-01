import { GameFieldDTO } from "../DTO";

export function copy(gameField: GameFieldDTO): GameFieldDTO{
    return JSON.parse(JSON.stringify(gameField)) as GameFieldDTO;
};
