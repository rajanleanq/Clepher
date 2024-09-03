export interface ITopGainerLoserResponse {
  metadata: string;
  last_updated: string;
  top_gainers: TopGainer[];
  top_losers: TopLoser[];
  most_actively_traded: MostActivelyTraded[];
}

export interface TopGainer {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

export interface TopLoser {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

export interface MostActivelyTraded {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

export interface ITopGainerLoserData {
  data:
    | ITopGainerLoserResponse["top_gainers"]
    | ITopGainerLoserResponse["top_losers"]
    | ITopGainerLoserResponse["most_actively_traded"];
}
