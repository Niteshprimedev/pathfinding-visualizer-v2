import { type TileType, type GridType, type SpeedType } from "./types"
import { MAX_ROWS, MAX_COLS, TILE_STYLE, SPEEDS } from "./constants"

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    for (let col = 0; col <= MAX_COLS; col++) {
        currentRow.push({
            row,
            col,
            isEnd: (row === endTile.row && col === endTile.col),
            isWall: false,
            isPath: false,
            distance: Infinity,
            isStart: (row === startTile.row && col === startTile.row),
            isTraversed: false,
            parent: null,
        });
    }

    return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row <= MAX_ROWS; row++) {
        grid.push(createRow(row, startTile, endTile));
    }

    return grid;
}

export const checkIfStartOrEnd = (row: number, col: number) => {
    return (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2);
}

export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall,
    }

    newGrid[row][col] = newTile;
    return newGrid;
}

export const isEqual = (startTile: TileType, tile: TileType) => {
    return startTile.row === tile.row && startTile.col === tile.col;
}

export const isRowColEqual = (row: number, col: number, tile: TileType) => {
    return row === tile.row && col === tile.col;
}

export const sleepTimer = (milliSec: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliSec));
}

export const isRightBottomTileExists = async (grid: GridType, row: number, col: number, speed: SpeedType) => {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;

    await sleepTimer(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
}

export const getRandInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const dropFromQueue = (tile: TileType, queue: TileType[]) => {
    for(let idxI = 0; idxI < queue.length; idxI++){
        if(isEqual(tile, queue[idxI])){
            queue = queue.splice(idxI, 1);
            break;
        }
    }
}