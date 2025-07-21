// import { CgUserRemove } from "react-icons/cg";
import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { initFunctionCost, initHeuristicCost } from "../../../utils/heuristics";
import type { GridType, TileType } from "../../../utils/types";

export const runAStarAlgo = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles: TileType[] = [];

  const heuristicCost = initHeuristicCost(grid, endTile);
  const functionCost = initFunctionCost();

  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  functionCost[base.row][base.col] =
    base.distance + heuristicCost[base.row][base.col];

  base.isTraversed = true;

  const unTraversedTiles = [base];

  while (unTraversedTiles.length > 0) {
    unTraversedTiles.sort((a: TileType, b: TileType) => {
      if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
        return b.distance - a.distance;
      }
      return functionCost[a.row][a.col] - functionCost[b.row][b.col];
    });

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
      const distanceToNeighbor = currentTile.distance + 1;
      if (distanceToNeighbor < neighbors[idxI].distance) {
        dropFromQueue(neighbors[idxI], unTraversedTiles);
        neighbors[idxI].distance = distanceToNeighbor;
        functionCost[neighbors[idxI].row][neighbors[idxI].col] =
          neighbors[idxI].distance +
          heuristicCost[neighbors[idxI].row][neighbors[idxI].col];
        neighbors[idxI].parent = currentTile;
        unTraversedTiles.push(neighbors[idxI]);
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];
  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }

  return { traversedTiles, path };
};
