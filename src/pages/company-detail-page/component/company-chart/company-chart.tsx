import Card from "../../../../components/card/card";
import { IPeriod, constant_period } from "../../../../constant/period";
import PeriodButton from "../chart-period-filters/chart-period-filters";
import { IChart } from "./chart.interface";
import { useParams } from "react-router";
import { ChartDataFormat, ChartFilter, cn } from "../../../../lib/utils";
import { Suspense, lazy, useMemo, useState } from "react";
import { useStockChartData } from "../../../../services/useStockChartData";
import Skeleton from "../../../../components/skeleton/skeleton";
import { IStockChartResponse } from "../../../../services/interface/stock-chart.interface";
const StockChart = lazy(() => import("../../../../components/chart/chart"));

export default function CompanyChart() {
  const params = useParams();
  const [period, setPeriod] = useState<IPeriod["period"]>("1y");
  const [chartType, setChartType] = useState<IChart["chart"]>("LineChart");
  const {
    data: StockChartRawData,
    isError,
    isLoading,
  } = useStockChartData(params?.id as string);
  const seriesData = ChartDataFormat(
    StockChartRawData as IStockChartResponse,
    "Weekly Adjusted Time Series"
  );
  const FilteredStockData = useMemo(
    () => ChartFilter(period, seriesData),
    [period, seriesData]
  );
  const handlePeriod = (payload: IPeriod["period"]) => {
    setPeriod(payload);
  };
  const handleChart = (payload: IChart["chart"]) => {
    setChartType(payload);
  };
  return (
    <>
      {!isLoading && (
        <Card className={cn("min-h-[550px] p-0", isError && "min-h-max")}>
          <div className="flex xs:flex-col md:flex-row xs:gap-2 justify-between border-b px-4 py-3">
            <p className="text-16 font-semibold">
              {params?.id} Line Chart{" "}
              <span className="underline uppercase">({period} </span>Period)
            </p>
            <div className="flex xs:flex-col md:flex-row xs:gap-2 md:gap-4 xs:items-start md:items-center">
              <div className="border rounded-lg flex">
                {constant_period.map((p: IPeriod["period"], index: number) => (
                  <PeriodButton
                    title={p}
                    onClick={() => handlePeriod(p)}
                    key={p}
                    active={p === period}
                    first_child={index === 0}
                  />
                ))}
              </div>
              <select
                className="text-14 px-2 py-1 border rounded-md xs:w-full md:w-max"
                value={chartType}
                onChange={(e) => handleChart(e.target.value as IChart["chart"])}
              >
                <option value="LineChart" defaultChecked>
                  Line
                </option>
                <option value="CandlestickChart">CandleStick</option>
                <option value="AreaChart">Area</option>
                <option value="BarChart">Bar</option>
              </select>
            </div>
          </div>
          {isError && (
            <p className="text-red-400 p-4 text-center">No data found</p>
          )}
          {!isError && (
            <Suspense fallback={<Skeleton />}>
            <StockChart
              ChartType={chartType}
              FilteredStockData={FilteredStockData}
            />
            </Suspense>
          )}
        </Card>
      )}
      {isLoading && <Skeleton />}
    </>
  );
}
