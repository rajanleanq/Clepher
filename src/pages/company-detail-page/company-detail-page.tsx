import { useMemo, useState } from "react";
import CompanyChart from "./component/company-chart/company-chart";
import CompanyOverview from "./component/company-overview/company-overview";
import { useStockChartData } from "../../services/useStockChartData";
import { ChartDataFormat, ChartFilter } from "../../lib/utils";

export default function CompanyDetailPage() {
  
  const [day, setDay] = useState("1year");
  const [chartType, setChartType] = useState("LineChart");
  const {
    data: StockChartRawData,
    isError,
    isLoading,
  } = useStockChartData("");
  const seriesData = ChartDataFormat(
    StockChartRawData,
    "Weekly Adjusted Time Series"
  );
  const FilteredStockData = useMemo(
    () => ChartFilter(day, seriesData),
    [day, seriesData]
  );

  return (
    <div className="flex flex-col gap-4 my-6">
      <CompanyChart />
      <CompanyOverview />
    </div>
  );
}
