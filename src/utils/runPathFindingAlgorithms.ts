import type { AlgorithmType, GridType, TileType } from "./types";

export const runPathFindingAlgorithms = async ({
    algorithm,
    grid,
    startTile,
    endTile,
}:{
    algorithm: AlgorithmType,
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
}) => {
    switch(algorithm){
        case "BFS":
            return //
        default:
            return //
    }
    return null;
}