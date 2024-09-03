import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SECRET_KEY } from "../constant/secret-key";
import { IStockChartResponse } from "./interface/stock-chart.interface";

export const useStockChartData = (symbol:string) => {
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"TIME_SERIES_WEEKLY_ADJUSTED"}&symbol=${symbol}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["TIME_SERIES_WEEKLY_ADJUSTED", symbol],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data?.Note) {
        throw new Error(data?.Note);
      } else if (data?.Information) {
        throw new Error(data?.Information);
      }
      return data as IStockChartResponse;
    },
    enabled: symbol?.trim().length > 0,
    staleTime:0
  });
};