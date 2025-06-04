import { useState, type RefObject } from 'react'
import { usePathfinding } from '../hooks/usePathfinding'
import { twMerge } from 'tailwind-merge';
import { MAX_COLS, MAX_ROWS } from '../utils/constants';
import { Tile } from './Tile';
import { checkIfStartOrEnd, createNewGrid } from '../utils/helpers.ts';

function Grid({ isVisualizationRunningRef }: { isVisualizationRunningRef: RefObject<boolean> }) {
    const { grid, setGrid } = usePathfinding();
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    }

    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(false);
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    }


    return (
        <div className={twMerge(
            // Base Classes:
            "flex flex-col items-center justify-center border-sky-300 mt-10",

            // Control grid height
            `lg:min-h[${MAX_ROWS * 17}px] md:min-h[${MAX_ROWS * 15}px] xs:min-h[${MAX_ROWS * 8}px] min-h[${MAX_ROWS * 7}px]`,

            // Control grid width
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`,
        )}>
            {grid.map((rowTile, rowIdx) => (
                <div key={rowIdx} className='flex'>
                    {rowTile.map((tile, tileIdx) => {
                        const { row, col, isEnd, isStart, isPath, isWall, isTraversed } = tile;

                        return (
                            <Tile
                                key={tileIdx}
                                row={tile.row}
                                col={tile.col}
                                isEnd={isEnd}
                                isStart={isStart}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                isWall={isWall}
                                handleMouseDown={() => handleMouseDown(row, col)}
                                handleMouseUp={() => handleMouseUp(row, col)}
                                handleMouseEnter={() => handleMouseEnter(row, col)}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

export default Grid
