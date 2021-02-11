import { AreaChart, Area, XAxis, YAxis, Legend, Tooltip } from "recharts";
import "./App.css";

const Suspension = ({ currentLap }) => {
  // const data = currentLap && currentLap.fork.map((fork, idx) => ({
  //   name: `${idx}`,
  //   fork: Math.trunc(fork),
  //   shock: Math.trunc(currentLap.suspension[idx]),
  // }));

  let data = [];

  if (currentLap) {
    for (let i = 0; i < currentLap.gps.length; i = i + 100) {
      data.push({
        name: i,
        fork: Math.trunc(currentLap.fork[i]),
        shock: Math.trunc(currentLap.suspension[i]),
      });
    }
  }

  return (
    data.length && (
      <div className="s-area">
        <AreaChart
          width={850}
          height={500}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="shock"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="fork"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    )
  );
};

export default Suspension;
