import { EXTENDED_SLEEP_TIME, PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants";
import { isEqual } from "./helpers";
import type { SpeedType, TileType } from "./types";

export const animatePath = (
    traversedTiles: TileType[],
    path: TileType[],
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType,
) => {
    for (let idxI = 0; idxI < traversedTiles.length; idxI++) {
        setTimeout(() => {
            const tile = traversedTiles[idxI];
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`
            }
        }, SLEEP_TIME * idxI * SPEEDS.find((s) => s.value === speed)!.value);
    }

    setTimeout(() => {
        for (let idxI = 0; idxI < path.length; idxI++) {
            setTimeout(() => {
                const tile = path[idxI];
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    document.getElementById(`${tile.row}-${tile.col}`)!.className = `${PATH_TILE_STYLE} animate-path`;
                }
            }, EXTENDED_SLEEP_TIME * idxI * SPEEDS.find((s) => s.value === speed)!.value);
        }

    }, SLEEP_TIME * traversedTiles.length * SPEEDS.find((s) => s.value === speed)!.value)
}