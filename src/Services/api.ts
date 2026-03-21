import { SalesData } from "../types/chartTypes";

export const fetchSalesData = async (): Promise<SalesData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: "January", revenue: 5000 },
        { month: "Feb", revenue: 2000 },
        { month: "March", revenue: 8000 },
        { month: "May", revenue: 3444 },
        { month: "August", revenue: 1000 },
      ]);
    },1500);
  });
};
