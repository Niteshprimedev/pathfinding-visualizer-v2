// explores siblings first;

import { isEqual } from "../../../utils/helpers";
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
        const currentTile = unTraversedTiles.shift();
        if (currentTile && currentTile.isWall === true) {
            continue;
        }
        if(currentTile && currentTile.distance === Infinity) break;
        if(currentTile){
            currentTile.isTraversed = true;
            traversedTiles.push(currentTile);

            if(isEqual(currentTile, endTile)) break;
        }


    }

    return null;
}