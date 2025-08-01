import { MAX_COLS, MAX_ROWS, SLEEP_TIME, WALL_TILE_STYLE } from "./constants";
import { isEqual, sleepTimer } from "./helpers";
import type { GridType, TileType } from "./types";

export async function constructBorder(
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) {
    // Right, Bottom, Left and Top;
    const directions = [
        { row: 0, col: 1 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: -1, col: 0 }
    ];

    let row = 0;
    let col = 0;

    for (let direction of directions) {
        while (row + direction.row >= 0 && row + direction.row < MAX_ROWS && col + direction.col >= 0 && col + direction.col < MAX_COLS) {
            row += direction.row;
            col += direction.col;

            if (!isEqual(grid[row][col], startTile) && !isEqual(grid[row][col], endTile)) {
                grid[row][col].isWall = true;
                const tileElement = document.getElementById(`${row}-${col}`);
                if (tileElement) {
                    tileElement.classList.add(
                        ...WALL_TILE_STYLE.split(" "),
                        "animate-wall"
                    );
                }
                await sleepTimer(SLEEP_TIME);
            }
        }

        // correct the positions for next direction;
        if (row < 0) row = 0;
        if (row >= MAX_ROWS) row = MAX_ROWS - 1;
        if (col < 0) col = 0;
        if (col >= MAX_COLS) col = MAX_COLS - 1;
    }
}