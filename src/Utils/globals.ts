import { GameFieldDTO } from "../DTO";

export enum actions {
    Move = "move",
    Rotate = "rotate"
}

export const GameField: GameFieldDTO = {
    rows:[
        [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
        [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
        [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
        [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
        [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
    ]
}