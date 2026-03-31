import React from 'react'
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts'
import { SalesData } from '../types/chartTypes'

type props= {
    data: SalesData[];
}

const RevenueBarChart = ({data} : props) => {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  )
}

export default RevenueBarChart