export interface SalesData {
    month: string;
    revenue: number;
}

export interface ApiState{
    data :SalesData[] ;
    loading: boolean;
    error: string | null;
}