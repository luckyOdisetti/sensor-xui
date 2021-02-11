import "./App.css";
import { LineChart, Line, Legend, XAxis, YAxis } from "recharts";

const Lean = ({currentLap}) => {

   let data = [];

   if (currentLap) {
     for (let i = 0; i < currentLap.gps.length; i = i + 100) {
       data.push({
         name: i,
         speed: Math.trunc(currentLap.gps[i][2]),
         lean: Math.trunc(currentLap.fusion_lean[i]),
       });
     }
   }
  return (
    data.length && <div className="s-lean">
      <LineChart
        width={850}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend verticalAlign="top" height={36}/>
        <Line type="monotone" dataKey="speed" stroke="#8884d8" />
        <Line type="monotone" dataKey="lean" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Lean;
