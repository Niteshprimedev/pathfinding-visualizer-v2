import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export const useSpeed = () => {
    const speedContext = useContext(SpeedContext);
    if (!speedContext) {
        throw Error("useSpeed must be used within a SpeedProvider");
    }
    return speedContext;
}