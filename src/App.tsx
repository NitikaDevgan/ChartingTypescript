
import Card from "./Components/Card";
import Loader from "./Components/Loader";
import RevenueBarChart from "./Components/RevenueBarChart";
import RevenuePieChart from "./Components/RevenuePieChart";
import SalesChart from "./Components/SalesChart";
import { useSalesData } from "./hooks/useSalesData";

const container = {
  background: "#f9fafb",
  minHeight: "100vh",
  padding: "20px",
  fontFamily: "sans-serif",
};

const header = {
  marginBottom: "20px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
  marginBottom: "20px",
};

const chartGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};

const cardStyle = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const centerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const buttonStyle = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#4f46e5",
  color: "#fff",
  cursor: "pointer",
};


function App() {
  const { data, loading, error, retry } = useSalesData();

  if (loading) return <Loader />;

  if (error)
  return (
    <div style={centerStyle}>
      <h3>⚠️ Something went wrong</h3>

      <button
        onClick={retry}
        disabled={loading}
        style={{
          ...buttonStyle,
          background: loading ? "#9ca3af" : "#4f46e5",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Retrying..." : "Retry"}
      </button>
    </div>
  );


  const totalRevenue = data.reduce((acc, d) => acc + d.revenue, 0);
  const bestMonth = data.reduce((max, d) =>
    d.revenue > max.revenue ? d : max
  ).month;

  const avgRevenue = Math.floor(totalRevenue / data.length);

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h2>📊 Analytics Dashboard</h2>
      </div>

      {/* Summary Cards */}
      <div style={summaryGrid}>
        <Card title="Total Revenue" value={`₹ ${totalRevenue}`} />
        <Card title="Best Month" value={bestMonth} />
        <Card title="Avg Revenue" value={`₹ ${avgRevenue}`} />
        <Card title="Growth" value="+12%" />
      </div>

      {/* Charts */}
      <div style={chartGrid}>
        <div style={{ ...cardStyle, gridColumn: "span 2" }}>
          <h3>Sales Trend</h3>
          <SalesChart data={data} />
        </div>

        <div style={cardStyle}>
          <h3>Revenue Bar</h3>
          <RevenueBarChart data={data} />
        </div>

        <div style={cardStyle}>
          <h3>Revenue Distribution</h3>
          <RevenuePieChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
