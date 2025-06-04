import { useContext } from "react";
import { TileContext } from "../context/TileContext";

export const useTile = () => {
    const tileContext = useContext(TileContext);
    if (!tileContext) {
        throw Error("useTile must be used within a TileContext")
    }
    return tileContext;
}