import type { GridType, SpeedType, TileType } from "../../../utils/types";
import { createHorizontalDivision } from "./createHorizontalDivision";
import { createVerticalDivision } from './createVerticalDivision';

export default async function runRecursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
}: {
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    row: number,
    col: number,
    height: number,
    width: number,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
}) {
    // Base Case:
    if (height <= 1 || width <= 1) {
        return;
    }

    if (height > width) {
        await createHorizontalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        });
    }
    else {
        await createVerticalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        });
    }

    return null;
}