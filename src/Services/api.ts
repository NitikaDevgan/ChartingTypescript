import { SalesData } from "../types/chartTypes";
import { getfetchSalesData } from "./mockApi"

export const fetchSalesData = async () : Promise<SalesData[]> => {
  return getfetchSalesData();
}