import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constants";
import { getRandInt, isEqual, sleepTimer } from "../../../utils/helpers";
import type { GridType, SpeedType, TileType } from "../../../utils/types";
import runRecursiveDivision from "./runRecursiveDivision";

export async function createHorizontalDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed
}: {
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    row: number,
    col: number,
    height: number,
    width: number,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType,
}) {
    const makeWallAt = row + getRandInt(0, height - 1) * 2 + 1;
    const makePassageAt = col + getRandInt(0, width) * 2;

    for (let idxI = 0; idxI < (2 * width - 1); idxI++) {
        if (makePassageAt !== col + idxI) {
            if (!isEqual(grid[makeWallAt][col + idxI], startTile) && !isEqual(grid[makeWallAt][col + idxI], endTile)) {
                grid[makeWallAt][col + idxI].isWall = true;

                document.getElementById(`${makeWallAt}-${col + idxI}`)!.className = `${WALL_TILE_STYLE} animate-wall`;
                await sleepTimer(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
            }
        }
    }

    // Recursively Divide the divisions above and below the cells;
    await runRecursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height: (makeWallAt - row + 1) / 2,
        width,
        setIsDisabled,
        speed
    });

    await runRecursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height: height - (makeWallAt - row + 1) / 2,
        width,
        setIsDisabled,
        speed
    });
    return null;
}