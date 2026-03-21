import { useEffect, useState } from "react"
import { ApiState } from "../types/chartTypes"
import { fetchSalesData } from "../Services/api"

export const useSalesData = () => {
    const [state, setState] = useState<ApiState>({
        data:[],
        loading: true,
        error: null
    })


useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchSalesData();
            setState({ data, loading: false, error: null});
        } catch (error) {
            setState({ data:[], loading: false, error: "Failed to fetch data"});
        }
    };
    fetchData();
},[]);

return state;
}