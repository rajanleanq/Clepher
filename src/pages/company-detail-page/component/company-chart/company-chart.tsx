import { useState } from "react";
import Card from "../../../../components/card/card";
import { IPeriod, constant_period } from "../../../../constant/period";
import PeriodButton from "../chart-period-filters/chart-period-filters";
import StockChart from "../../../../components/chart/chart";

export default function CompanyChart() {
  const [period, setPeriod] = useState<IPeriod["period"]>("1y");
  return (
    <Card className="min-h-[700px] p-0">
      <div className="flex  justify-between border-b px-4 py-3">
        <p className="text-16 font-semibold">
          Company Line Chart <span className="underline">(1Yr Period)</span>
        </p>
        <div className="flex gap-4 items-center">
          <div className="border rounded-lg flex">
            {constant_period.map((p: IPeriod["period"], index: number) => (
              <PeriodButton
                title={p}
                onClick={() => setPeriod(p)}
                key={p}
                active={p === period}
                first_child={index === 0}
              />
            ))}
          </div>
          <select className="text-14 px-2 py-1 border rounded-md">
            <option value="LineChart" defaultChecked>
              Line
            </option>
            <option value="CandlestickChart">CandleStick</option>
            <option value="AreaChart">Area</option>
            <option value="BarChart">Bar</option>
          </select>
        </div>
      </div>
      <StockChart ChartType="LineChart" />
    </Card>
  );
}
