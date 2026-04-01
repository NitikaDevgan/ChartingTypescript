import React from 'react'
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts'
import { SalesData } from '../types/chartTypes'

type props= {
    data: SalesData[];
}

const cardStyle = {
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};


const RevenueBarChart = ({data} : props) => {
  return (
    <>
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
  <div style={cardStyle}>
    <h4>Total Revenue</h4>
    <p>₹ {data.reduce((acc, d) => acc + d.revenue, 0)}</p>
  </div>

  <div style={cardStyle}>
    <h4>Best Month</h4>
    <p>
      {
        data.reduce((max, d) =>
          d.revenue > max.revenue ? d : max
        ).month
      }
    </p>
  </div>
</div>

    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
    </>
  )
}

export default RevenueBarChart