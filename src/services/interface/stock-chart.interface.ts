export interface IStockChartResponse {
  "Meta Data": MetaData;
  "Weekly Adjusted Time Series": WeeklyAdjustedTimeSeries;
}

export interface MetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Time Zone": string;
}

export interface WeeklyAdjustedTimeSeries {
  [key: string]: WeeklyAdjustedTimeSeriesValue;
}
export interface WeeklyAdjustedTimeSeriesValue {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. adjusted close": string;
  "6. volume": string;
  "7. dividend amount": string;
}
