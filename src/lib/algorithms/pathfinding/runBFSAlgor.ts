// explores siblings first;

import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import type { GridType, TileType } from "../../../utils/types";

export const runBFSAlgo = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTraversedTiles = [base];

    while (unTraversedTiles.length) {
        const currentTile = unTraversedTiles.shift() as TileType;
        if (currentTile.isWall === true) {
            continue;
        }
        if (currentTile.distance === Infinity) break;
        currentTile.isTraversed = true;
        traversedTiles.push(currentTile);

        if (isEqual(currentTile, endTile)) break;

        const neighbors = getUntraversedNeighbors(grid, currentTile);

        for (let idxI = 0; idxI < neighbors.length; idxI++) {
            if (!isInQueue(neighbors[idxI], unTraversedTiles)) {
                const neighbor = neighbors[idxI];
                neighbor.distance = currentTile.distance + 1;
                neighbor.parent = currentTile;
                unTraversedTiles.push(neighbor);
            }
        }
    }

    const path = []; // Initialize an array to store the path
    let tile = grid[endTile.row][endTile.col]; // Start from the end tile
    while (tile !== null) {
        // Backtrack until the start tile
        tile.isPath = true; // Mark the tile as part of the path
        path.unshift(tile); // Add the tile to the path
        tile = tile.parent!; // Move to the parent tile
    }
    return { traversedTiles, path }; // Return the traversed tiles and the path
}