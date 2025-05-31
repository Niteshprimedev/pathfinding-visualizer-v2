import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"

export const usePathfinding = () => {
    const pathFindingContext = useContext(PathfindingContext);

    if(!pathFindingContext){
        throw new Error("usePathfinding must be used within a PathfindingProvider");
    }

    return pathFindingContext;
}