import { MAX_ROWS, MAX_COLS } from "./constants";
import { isRightBottomTileExists } from "./helpers";
import type { GridType, SpeedType } from "./types";

export const destroyWall = async (grid: GridType, row: number, col: number, isRight: number, speed: SpeedType) => {
    // Destroying the right row;
    if (isRight && (col + 1) <= MAX_COLS && grid[row][col + 1]) {
        await isRightBottomTileExists(grid, row, col + 1, speed);
    }
    // Destroying the below row;
    else if ((row + 1) <= MAX_ROWS && grid[row + 1][col]) {
        await isRightBottomTileExists(grid, row + 1, col, speed);
    }
    // Destroying the default tile;
    else {
        await isRightBottomTileExists(grid, row, col, speed);
    }
}