import Select from './Select';
import { MAZES } from '../utils/constants';
import { usePathfinding } from '../hooks/usePathfinding';
import type { MazeType } from '../utils/types';
import { resetGrid } from '../utils/resetGrid';
import { useTile } from '../hooks/useTile';

function Nav() {
    const { maze, setMaze, grid } = usePathfinding();
    const { startTile, endTile } = useTile();

    const handleGenerateMaze = (maze: MazeType) => {
        if (maze === "NONE") {
            setMaze(maze);
            resetGrid({ grid, startTile, endTile });
            return;
        }
    }
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
                </div>
            </div>
        </div >
    )
}

export default Nav
