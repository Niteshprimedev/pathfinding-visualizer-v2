import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types";

export const getUntraversedNeighbors = (
    grid: GridType,
    tile: TileType,
) => {
    const { row, col } = tile;
    const neighbors = [];

    // Top Neighbor
    if(row > 0){
        neighbors.push(grid[row - 1][col]);
    }
    // Bottom Neighbor
    if(row < MAX_ROWS - 1){
        neighbors.push(grid[row + 1][col]);
    }
    // Left Neighbor
    if(col > 0){
        neighbors.push(grid[row][col - 1])
    }
    // Right Neighbor
    if(col < MAX_COLS - 1){
        neighbors.push(grid[row][col + 1]);
    }

    return neighbors.filter(neighbor => !neighbor.isTraversed);
}