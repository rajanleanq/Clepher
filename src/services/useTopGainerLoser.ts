import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SECRET_KEY } from "../constant/secret-key";

export const useTopGainerLoser = () => {
  const URL = ` ${"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS"}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["gainer_looser", URL],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
    staleTime: 5 * 60 * 1000, //5 Minutes
  });
};