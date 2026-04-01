import { useEffect, useState } from "react";
import { ApiState } from "../types/chartTypes";
import { fetchSalesData } from "../Services/api";


export const useSalesData = () => {
  const [state, setState] = useState<ApiState>({
    data: [],
    loading: true,
    error: null,
  });

  // ✅ Reusable function (IMPORTANT)
  const getData = async () => {
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));

    try {
      const data = await fetchSalesData();

      setState({
        data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: [],
        loading: false,
        error: "Failed to fetch data",
      });
    }
  };

  // ✅ Initial call
  useEffect(() => {
    getData();
  }, []);

  // ✅ Return retry correctly
  return {
    ...state,
    retry: getData, // ✅ correct
  };
};
