import './App.css';
import SalesChart from './Components/SalesChart';
import { salesData } from './data/salesData';
import { useSalesData } from './hooks/useSalesData';
import Loader from './Components/Loader';

function App() {
  const { data, loading, error } =  useSalesData();

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  return (
    <div className="App">
     <h2>Sales Chart</h2>
     <SalesChart data={salesData}/>
    </div>
  );
}

export default App;



