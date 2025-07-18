import { PathfindingProvider } from "./context/PathfindingContext"
import { TileProvider } from "./context/TileContext"
import { SpeedProvider } from "./context/SpeedContext"
import Grid from './components/Grid';
import { useRef } from "react";
import Nav from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef}></Nav>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}></Grid>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
