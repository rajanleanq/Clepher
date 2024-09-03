import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SECRET_KEY } from "../constant/secret-key";

export const useStockSearchData = (searchKey:string) => {
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"SYMBOL_SEARCH"}&keywords=${searchKey}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["SYMBOL_SEARCH", searchKey],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }

      return data.bestMatches;
    },
    staleTime: 5 * 60 * 1000,
  });
};