import type { GridType, MazeType, SpeedType, TileType } from "./types";
import { runBinaryTree } from "../lib/algorithms/maze/runBinaryTree";
import { constructBorder } from "./constructBorder";

export const runMazeAlgorithm = async ({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed
}: {
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
}) => {
    if (maze === 'BINARY_TREE') {
        await runBinaryTree(grid, startTile, endTile, setIsDisabled, speed);
    }
    else if (maze === 'RECURSIVE_DIVISION') {
        await constructBorder(grid, startTile, endTile);
    }
    return null;
}