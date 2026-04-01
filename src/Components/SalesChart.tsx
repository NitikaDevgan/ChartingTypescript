import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { SalesData } from "../types/chartTypes";

type Props = {
  data: SalesData[];
};

const cardStyle = {
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};


const SalesChart = ({ data }: Props) => {
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

    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone"
  dataKey="revenue"
  stroke="#4f46e5"
  strokeWidth={3} />
    </LineChart>
    </>
  );
};

export default SalesChart;
