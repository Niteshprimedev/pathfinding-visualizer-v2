import { runBFSAlgo } from "../lib/algorithms/pathfinding/runBFSAlgo";
import { runDFSAlgo } from '../lib/algorithms/pathfinding/runDFSAlgo'
import { runDJKAlgo } from '../lib/algorithms/pathfinding/runDJKAlgo'
import { runAStarAlgo } from '../lib/algorithms/pathfinding/runAStarAlgo'
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
        case "DFS":
            return runDFSAlgo(grid, startTile, endTile);
        case "DIJKSTRA":
            return runDJKAlgo(grid, startTile, endTile);
        case "A_STAR":
            return runAStarAlgo(grid, startTile, endTile);
        default:
            return runBFSAlgo(grid, startTile, endTile);
    }
}