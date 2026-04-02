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
    if (retryCount < 3) {
      setTimeout(() => {
        getData(retryCount + 1);
      }, 1000);
    } else {
      setState({
        data: [],
        loading: false,
        error: "Failed after retries ❌",
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
