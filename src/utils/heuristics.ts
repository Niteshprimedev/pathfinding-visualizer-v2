import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types";

const retrieveHeuristicCost = (
    currentTile: TileType,
    endTile: TileType
) => {
    const manhattanDistance = 1;
    const row = Math.abs(currentTile.row - endTile.row);
    const col = Math.abs(currentTile.col - endTile.col);

    return manhattanDistance * (row + col);
}

export const initHeuristicCost = (
    grid: GridType,
    endTile: TileType,
) => {
    const heuristicCost = [];

    for(let idxI = 0; idxI < MAX_ROWS; idxI++){
        const row = [];

        for(let idxJ = 0; idxJ < MAX_COLS; idxJ++){
            row.push(retrieveHeuristicCost(grid[idxI][idxJ], endTile));
        }

        heuristicCost.push(row);
    }

    return heuristicCost;
}

export const initFunctionCost = () => {
    const functionCost = [];

    for(let idxI = 0; idxI < MAX_ROWS; idxI++){
        const row = [];

        for(let idxJ = 0; idxJ < MAX_COLS; idxJ++){
            row.push(Infinity);
        }

        functionCost.push(row);
    }

    return functionCost;
}