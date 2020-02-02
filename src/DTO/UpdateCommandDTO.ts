import { actions } from "../Utils/globals";

export interface UpdateCommandDTO {
    action: actions,
    currentCol: number, // Previous Column
    currentRow: number, 
    newCol: number | null,
    newRow: number | null, // Current Row
}