import "./App.css";
import React from "react";
import Map from "./MapContainer";
import Suspension from "./Suspension";
import Lean from "./Lean";
import LapTable from "./LapTable";
import { LAPS_DATA as LAPS_MAP } from "./laps_data.js";

function App() {
  const [lap, setLap] = React.useState(null);
  const onSelect = (timestamp) => {
    setLap(LAPS_MAP[timestamp]);
  };
  const lapIndex = Object.keys(LAPS_MAP);

  return (
    <div className="grid">
      <div className="left">
        <div className="lap-table">
          <h3>Lap Table</h3>
          <ul>
            {lapIndex.map((timestamp, idx) => (
              <li onClick={() => onSelect(timestamp)} key={idx}>{`Lap ${
                idx + 1
              } ${new Date(Number(timestamp)).toDateString()}`}</li>
            ))}
          </ul>
        </div>
        <Map currentLap={lap} />
      </div>
      <div className="right">
        <Suspension currentLap={lap} />
        <Lean currentLap={lap} />
      </div>
    </div>
  );
}

export default App;
