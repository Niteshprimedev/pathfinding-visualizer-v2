import { isEqual } from "./helpers";
import type { TileType } from "./types";

export function isInStack (
    tile: TileType,
    stack: TileType[],
) {
    for(let idxI = 0; idxI < stack.length; idxI++){
        if(isEqual(tile, stack[idxI])) return true;
    }

    return false;
}