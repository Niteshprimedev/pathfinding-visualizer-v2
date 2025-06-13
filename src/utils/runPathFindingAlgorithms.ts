import { runBFSAlgo } from "../lib/algorithms/pathfinding/runBFSAlgor";
import type { AlgorithmType, GridType, TileType } from "./types";

export const runPathFindingAlgorithms = ({
    algorithm,
    grid,
    startTile,
    endTile,
}: {
    algorithm: AlgorithmType,
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
}) => {
    switch (algorithm) {
        case "BFS":
            return runBFSAlgo(grid, startTile, endTile);
        default:
            return runBFSAlgo(grid, startTile, endTile);
    }
}