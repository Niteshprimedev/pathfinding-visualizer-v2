import type { GridType, MazeType, SpeedType, TileType } from "./types";
import { runBinaryTree } from "../lib/algorithms/maze/runBinaryTree";

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
    if(maze === 'BINARY_TREE'){
        await runBinaryTree(grid, startTile, endTile, setIsDisabled,speed);
    }
    return null;
}