import { END_TILE_CONFIGURATION, MAX_COLS, MAX_ROWS, START_TILE_CONFIGURATION, TILE_STYLE } from "./constants";
import type { GridType, TileType } from "./types";
import { isEqual } from './helpers.ts';

export const resetGrid = ({
    grid,
    startTile = START_TILE_CONFIGURATION,
    endTile = END_TILE_CONFIGURATION,
}: {
    grid: GridType;
    startTile?: TileType;
    endTile?: TileType;
}) => {
    for (let row = 0; row < MAX_ROWS; row++) {
        for (let col = 0; col < MAX_COLS; col++) {
            const tile = grid[row][col];
            tile.isWall = false;
            tile.isPath = false;
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.parent = null;

            // not a first tile and not an end tile;
            if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`);

                if (tileElement) {
                    tileElement.className = TILE_STYLE;
                }

                if(tile.row === MAX_ROWS - 1){
                    tileElement?.classList.add("border-b");
                }

                if(tile.col === 0){
                    tileElement?.classList.add("border-l");
                }
            }
        }
    }
}