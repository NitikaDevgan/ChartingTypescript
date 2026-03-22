import { SalesData } from "../types/chartTypes";

export const getfetchSalesData = async (): Promise<SalesData[]> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        const fail = Math.random() < 5.0; //50% fail
        if (fail) {
            reject(new Error("Network Error, Please try later."));
        }else {
      resolve([
        { month: "January", revenue: 5000 },
        { month: "Feb", revenue: 2000 },
        { month: "March", revenue: 8000 },
        { month: "May", revenue: 3444 },
        { month: "August", revenue: 1000 },
      ]);
    }
    },1500);
  });
};
