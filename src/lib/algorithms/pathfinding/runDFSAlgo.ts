import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInStack } from "../../../utils/isInStack";
import type { GridType, TileType } from "../../../utils/types";

export const runDFSAlgo = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles: TileType[] = [];

    const base = grid[startTile.row][startTile.col]
    base.distance = 0;
    base.isTraversed = true;

    const unTraversedTiles = [base];

    while (unTraversedTiles.length){
        const currentTile = unTraversedTiles.pop() as TileType;
        if(currentTile.isWall === true){
            continue;
        }
        if(currentTile.distance === Infinity) break;

        currentTile.isTraversed = true;
        traversedTiles.push(currentTile);
        
        if(isEqual(currentTile, endTile)) break;

        const neighbors = getUntraversedNeighbors(grid, currentTile);

        for(let idxI = 0; idxI < neighbors.length; idxI++){
            if(!isInStack(neighbors[idxI], unTraversedTiles)){
                const neighbor = neighbors[idxI];
                neighbor.distance = currentTile.distance + 1;
                neighbor.parent = currentTile;
                unTraversedTiles.push(neighbor);
            }
        }
    }

    const path = [];
    let tile = grid[endTile.row][endTile.col];
    
    while(tile !== null){
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent!;
    }

    return { traversedTiles, path };

}