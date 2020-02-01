import { PipeDTO } from "./PipeDTO";

export interface GameFieldDTO{
    rows: Array<Array<PipeDTO>>
}
export const customGameField1 = {rows:[
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
    [{entryPositions: [0, 2], id: 0}, {entryPositions: [0, 2], id: 2}, {entryPositions: [0, 2], id: 3}, {entryPositions: [0, 2], id: 4}, {entryPositions: [0, 2], id: 5},],
]} as GameFieldDTO;
