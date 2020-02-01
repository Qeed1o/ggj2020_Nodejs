import { PipeDTO } from "./PipeDTO";

export interface GameFieldDTO{
    rows: Array<Array<PipeDTO>>
}
export const customGameField1 = {rows:[
    [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
    [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
    [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
    [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
    [{rotation: 0, id: 0}, {rotation: 0, id: 2}, {rotation: 0, id: 3}, {rotation: 0, id: 4}, {rotation: 0, id: 5},],
]} as GameFieldDTO;
