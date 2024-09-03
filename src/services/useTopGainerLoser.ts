import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SECRET_KEY } from "../constant/secret-key";
import { ITopGainerLoserResponse } from "./interface/top-gainer-loser.interface";

export const useTopGainerLoser = () => {
  const URL = ` ${"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS"}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["gainer_looser", URL],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data as ITopGainerLoserResponse;
    },
  });
};