import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const ChartDataFormat = (chartData: any, objectKey: any) => {
  // Extract the "Weekly Adjusted Time Series" data
  const googleChartData = [];
  if (chartData && chartData[objectKey]) {
    const weeklyData = chartData["Weekly Adjusted Time Series"];

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

export const ChartFilter = (filter: any, initialData: any) => {
  const today = new Date();
  let newData = [...initialData];

  switch (filter) {
    case "24hr":
      // Filter data for the last 24 hours
      const twentyFourHoursAgo = new Date(today);
      twentyFourHoursAgo.setDate(today.getDate() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= twentyFourHoursAgo && itemDate <= today;
      });
      break;

    case "7days":
      // Filter data for the last 7 days
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= sevenDaysAgo && itemDate <= today;
      });
      break;

    case "1month":
      // Filter data for the last 1 month
      const oneMonthAgo = new Date(today);
      oneMonthAgo.setMonth(today.getMonth() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneMonthAgo && itemDate <= today;
      });
      break;

    case "1year":
      // Filter data for the last 1 year
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneYearAgo && itemDate <= today;
      });
      break;

    case "10years":
      // Filter data for the last 10 years
      const tenYearsAgo = new Date(today);
      tenYearsAgo.setFullYear(today.getFullYear() - 10);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= tenYearsAgo && itemDate <= today;
      });
      break;

    case "20years":
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
