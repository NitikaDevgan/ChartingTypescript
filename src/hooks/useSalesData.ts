import { useEffect, useState } from "react";
import { ApiState } from "../types/chartTypes";
import { fetchSalesData } from "../Services/api";

export const useSalesData = () => {
  const [state, setState] = useState<ApiState>({
    data: [],
    loading: true,
    error: null,
  });

  const MAX_RETRIES = 3;

  const getData = async (retryCount = 0) => {
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
      if (retryCount < MAX_RETRIES) {
        console.log(`Retrying... Attempt ${retryCount + 1}`);
        
        // ⏳ small delay before retry
        setTimeout(() => {
          getData(retryCount + 1);
        }, 1000);
      } else {
        setState({
          data: [],
          loading: false,
          error: "Failed after 3 retries ❌",
        });
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    ...state,
    retry: () => getData(), // manual retry
  };
};
