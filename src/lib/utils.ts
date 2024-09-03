import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IStockChartResponse } from "../services/interface/stock-chart.interface";
import { IPeriod } from "../constant/period";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const ChartDataFormat = (
  chartData: IStockChartResponse,
  objectKey: string
) => {
  // Extract the "Weekly Adjusted Time Series" data
  const googleChartData = [];
  if (chartData && chartData?.[objectKey as keyof IStockChartResponse]) {
    const weeklyData = chartData?.["Weekly Adjusted Time Series"];

    // Create an array to store the converted data
    googleChartData.push(["Date", "Open", "High", "Low", "Close"]);

    // Iterate through the data and convert it

    for (const date in weeklyData) {
      const dataPoint = weeklyData[date];
      const day = date; // Assuming the date is in the desired format

      // Extract values and convert them to numbers
      const a = parseFloat(dataPoint["1. open"]);
      const b = parseFloat(dataPoint["2. high"]);
      const c = parseFloat(dataPoint["3. low"]);
      const d = parseFloat(dataPoint["4. close"]);

      // Add the data to the result array
      googleChartData.push([day, a, b, c, d]);
    }
  }

  return googleChartData;
};

export const ChartFilter = (
  filter: IPeriod["period"],
  initialData: (string | number)[][]
) => {
  const today = new Date();
  let newData = [...initialData];

  switch (filter) {
    case "7d":
      // Filter data for the last 7 days
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= sevenDaysAgo && itemDate <= today;
      });
      break;

    case "1m":
      // Filter data for the last 1 month
      const oneMonthAgo = new Date(today);
      oneMonthAgo.setMonth(today.getMonth() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneMonthAgo && itemDate <= today;
      });
      break;

    case "1y":
      // Filter data for the last 1 year
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneYearAgo && itemDate <= today;
      });
      break;

    case "10y":
      // Filter data for the last 10 years
      const tenYearsAgo = new Date(today);
      tenYearsAgo.setFullYear(today.getFullYear() - 10);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= tenYearsAgo && itemDate <= today;
      });
      break;

    case "20y":
      // Filter data for the last 20 years
      const twentyYearsAgo = new Date(today);
      twentyYearsAgo.setFullYear(today.getFullYear() - 20);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= twentyYearsAgo && itemDate <= today;
      });
      break;

    default:
      // Use the full data if no filter matches
      newData = initialData;
      break;
  }

  newData.unshift(["Date", "Open", "High", "Low", "Close"]);
  return newData;
};
