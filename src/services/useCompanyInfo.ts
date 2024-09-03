import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SECRET_KEY } from "../constant/secret-key";
import { ICompanyInfoResponse } from "./interface/company-info.interface";

export const useCompanyInfo = (symbol: string) => {
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"OVERVIEW"}&symbol=${symbol}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["OVERVIEW", symbol],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }
      return data as ICompanyInfoResponse;
    },
    staleTime: 0,
  });
};
