import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function MetricsChart({ data, dataKey, color, unit }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(time) =>
            new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          }
        />
        <YAxis />
        <Tooltip
          labelFormatter={(value) =>
            new Date(value).toLocaleString()
          }
          formatter={(value) => [`${value}${unit}`, dataKey]}
        />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MetricsChart