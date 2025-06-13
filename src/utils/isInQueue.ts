import { isEqual } from "./helpers";
import type { TileType } from "./types";

export function isInQueue(tile: TileType, queue: TileType[]) {
    for (let idxI = 0; idxI < queue.length; idxI++) {
        if (isEqual(tile, queue[idxI])) return true;
    }

    return false;
}