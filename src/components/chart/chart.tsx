import Chart, { GoogleChartWrapperChartType } from "react-google-charts";

export default function StockChart({
  FilteredStockData,
  ChartType,
}: {
  FilteredStockData?: any;
  ChartType: GoogleChartWrapperChartType;
}) {
  const options = {
    legend: {
      textStyle: {
        color: "#A8A29E",
      },
    },
    animation: {
      duration: 1000,
      easing: "out",
      startup: true,
      trigger: "user",
    },
    backgroundColor: "#FFFFFF",
    hAxis: {
      textStyle: {
        color: "#A8A29E",
      },
    },
    vAxis: {
      textStyle: {
        color: "#A8A29E",
      },
    },
  };

  return (
    <div className="sm:h-[450px] h-[350px]">
      <Chart
        chartType={ChartType}
        height="100%"
        data={FilteredStockData}
        options={options}
      />
    </div>
  );
}
