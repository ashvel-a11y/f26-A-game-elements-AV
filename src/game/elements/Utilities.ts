export const enum ActionType {
    Attack = "Attack",
    Convert = "Convert",
    Move = "Move",
    Recruit = "Recruit",
    Renew = "Renew",
    Spawn = "Spawn",
    Swap = "Swap",
    Cancel = "Cancel",
}

/**
 * Description: BoardLocation represents a location
 * on the game board at the row index and column index
 * specified by member fields row and col respectively.
 *
 * @export
 * @class BoardLocation
 * @typedef {BoardLocation}
 */

export class BoardLocation {
    constructor(
        private row: number,
        private col: number,
    ) {}

    public getRow(): number {
        return this.row;
    }

    public getCol(): number {
        return this.col;
    }

    setRow(row: number): void {
        this.row = row;
    }

    setCol(col: number): void {
        this.col = col;
    }
}
