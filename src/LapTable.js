import "./App.css";
import { LAPS_DATA as LAPS_MAP } from "./laps_data.js";

const LapTable = ({onSelect}) => {
  const lapIndex = Object.keys(LAPS_MAP);
  console.log(lapIndex);
  return (
    <div>
      <h3>Lap Table</h3>
      <ul>
        {lapIndex.map((timestamp, idx) => (
          <li onClick={() => onSelect(timestamp)} key={idx}>{`Lap ${idx + 1} :: ${timestamp}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default LapTable;
