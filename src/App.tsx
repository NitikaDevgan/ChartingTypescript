import './App.css';
import SalesChart from './Components/SalesChart';
import { salesData } from './data/salesData';
import { useSalesData } from './hooks/useSalesData';
import Loader from './Components/Loader';
import RevenueBarChart from './Components/RevenueBarChart';
import RevenuePieChart from './Components/RevenuePieChart';

const cardStyle = {
  background: "#fff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};


function App() {
  const { data, loading, error } =  useSalesData();

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  return (
   <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
  <h2 style={{ marginBottom: "20px" }}>📊 Analytics Dashboard</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "20px",
    }}
  >
    <div style={cardStyle}>
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



