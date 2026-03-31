import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import { SalesData } from '../types/chartTypes'

type props = {
    data: SalesData[];
}

const RevenuePieChart = ({data} : props) => {
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="revenue" nameKey="month" fill="#8884d8" />
      <Tooltip />
    </PieChart>
  )
}

export default RevenuePieChart