import Select from './Select';
import PlayButton from '../components/PlayButton'
import { MAZES, PATHFINDING_ALGORITHMS } from '../utils/constants';
import { usePathfinding } from '../hooks/usePathfinding';
import type { AlgorithmType, MazeType } from '../utils/types';
import { resetGrid } from '../utils/resetGrid';
import { useTile } from '../hooks/useTile';
import { useState } from 'react';
import { runMazeAlgorithm } from '../utils/runMazeAlgorithms';
import { useSpeed } from '../hooks/useSpeed';
import { runPathFindingAlgorithms } from '../utils/runPathFindingAlgorithms';

function Nav() {
    const [isDisabled, setIsDisabled] = useState(false);
    const { maze, setMaze, grid, setGrid, isGraphVisualized, setIsGraphVisualized, algorithm, setAlgorithm } = usePathfinding();
    const { startTile, endTile } = useTile();
    const { speed } = useSpeed();

    const handleGenerateMaze = (maze: MazeType) => {
        console.log(maze, 'Handle Maze Component Clicked');
        if (maze === "NONE") {
            setMaze(maze);
            resetGrid({ grid, startTile, endTile });
            return;
        }

        setMaze(maze);
        setIsDisabled(true);
        runMazeAlgorithm({
            maze,
            grid,
            startTile,
            endTile,
            setIsDisabled,
            speed,
        });
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(false);
    }

    const handleRunVisualizer = () => {
        if (isGraphVisualized) {
            setIsGraphVisualized(false);
            resetGrid({ grid: grid.slice(), startTile, endTile });
            return;
        }

        // run the algorithm;
        const { traversedTiles, path } = runPathFindingAlgorithms({
            algorithm,
            grid,
            startTile,
            endTile
        });

        console.log(traversedTiles, path);
    }

    let count = 0;
    console.log("Nav component Rendered", count++);
    return (
        <div className='flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0'>
            <div className='flex items-center lg:justify-between justify-center w-full sm:w-[52rem]'>
                <h1 className='lg:flex hidden w-[40%] text-2xl pl-1'>
                    Pathfinding Visualizer
                </h1>
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                    <Select
                        value={maze}
                        label='Maze'
                        options={MAZES}
                        onChange={(e) => { handleGenerateMaze(e.target.value as MazeType) }}
                        isDisabled={false}
                    ></Select>
                    <Select
                        value={algorithm}
                        label='Graph'
                        options={PATHFINDING_ALGORITHMS}
                        onChange={(e) => { setAlgorithm(e.target.value as AlgorithmType) }}
                        isDisabled={false}
                    ></Select>
                    <PlayButton
                        isDisabled={isDisabled}
                        isGraphVisualized={isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer}
                    ></PlayButton>
                </div>
            </div>
        </div >
    )
}

export default Nav
