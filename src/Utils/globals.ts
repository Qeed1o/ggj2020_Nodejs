import { GameFieldDTO } from "../DTO";

export enum actions {
    Move = "move",
    Rotate = "rotate"
}

export const GameField: GameFieldDTO = {rows:[
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
]}