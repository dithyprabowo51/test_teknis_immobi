import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const BarChartComponents = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const dataFromProps = [
      {
        name: "Target",
        value: props.data.target
      },
      {
        name: "Achievement",
        value: props.data.achievement
      },
      {
        name: "Delta",
        value: props.data.achievement - props.data.target
      },
    ]
    setData(dataFromProps)
  }, [props.data])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default BarChartComponents