import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import type { GridType, TileType } from "../../../utils/types";

export function runDJKAlgo(
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) {
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const unTraversedTiles = [base];

    while (unTraversedTiles.length) {
        unTraversedTiles.sort((a: TileType, b: TileType) => {
            return a.distance - b.distance;
        });

        const currentTile = unTraversedTiles.shift() as TileType;

        if (currentTile?.isWall === true) {
            continue;
        }
        if (currentTile?.distance === Infinity) break;

        currentTile.isTraversed = true;
        traversedTiles.push(currentTile);

        if (isEqual(currentTile, endTile)) break;

        const neighbors = getUntraversedNeighbors(grid, currentTile);
        for (let idxI = 0; idxI < neighbors.length; idxI++) {
            if (!isInQueue(currentTile, traversedTiles)) {
                const neighbor = neighbors[idxI];
                if (currentTile.distance + 1 < (neighbor.distance)) {
                    dropFromQueue(neighbor, unTraversedTiles);
                    neighbor.distance = currentTile.distance + 1
                    neighbor.parent = currentTile;
                    unTraversedTiles.push(neighbor);
                }
            }
        }
    }

    const path = [];
    let tile = grid[endTile.row][endTile.col] as TileType;

    while (tile !== null) {
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return { traversedTiles, path };
}