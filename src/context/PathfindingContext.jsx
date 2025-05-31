import { createContext, ReactNode } from 'react';
import { AlgorithmType, MazeType, GridType } from '../utils/types';

interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext < PathfindingContextInterface | undefined > (undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
    return (
        <PathfindingContext.Provider>
            {children}
        </PathfindingContext.Provider>
    )
}