import { GameFieldDTO } from "../DTO";
import { copy } from "./copyGameField";

export enum actions {
    Move = "move",
    Rotate = "rotate"
}

export const ConstGameField: GameFieldDTO = {rows:[
    [{entryPositions: [1, 3], id: 0}, {entryPositions: [1, 2], id: 2}, {entryPositions: [2, 3], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [1, 2], id: 5},],
    [{entryPositions: [1, 3], id: 0}, {entryPositions: [1, 2], id: 2}, {entryPositions: [2, 3], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [1, 2], id: 5},],
    [{entryPositions: [1, 3], id: 0}, {entryPositions: [1, 2], id: 2}, {entryPositions: [2, 3], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [1, 3], id: 0}, {entryPositions: [1, 2], id: 2}, {entryPositions: [2, 3], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [1, 3], id: 0}, {entryPositions: [1, 2], id: 2}, {entryPositions: [2, 3], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
]}
export const GameField: GameFieldDTO = copy(ConstGameField);