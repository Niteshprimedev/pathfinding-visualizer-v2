import { SPEEDS, WALL_TILE_STYLE } from "../../../utils/constants";
import { getRandInt, isEqual, sleepTimer } from "../../../utils/helpers";
import type { GridType, SpeedType, TileType } from "../../../utils/types";
import runRecursiveDivision from "./runRecursiveDivision";

export async function createVerticalDivision({
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
    const makeWallAt = col + getRandInt(0, width - 1) * 2 + 1;
    const makePassageAt = row + getRandInt(0, height) * 2;

    for (let idxI = 0; idxI < (2 * height - 1); idxI++) {
        if (makePassageAt !== row + idxI) {
            if (!isEqual(grid[row + idxI][makeWallAt], startTile) && !isEqual(grid[row + idxI][makeWallAt], endTile)) {
                document.getElementById(`${row + idxI}-${makeWallAt}`)!.className = `${WALL_TILE_STYLE} animate-wall`;
                await sleepTimer(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
            }
        }
    }

    await runRecursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width: (makeWallAt - col + 1) / 2,
        setIsDisabled,
        speed
    });

    await runRecursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col: makeWallAt + 1,
        height,
        width: width - (makeWallAt - col + 1) / 2,
        setIsDisabled,
        speed,
    })

    return null;
}