import { useParams } from "react-router";
import Card from "../../../../components/card/card";
import { useCompanyInfo } from "../../../../services/useCompanyInfo";
import useSearchParams from "../../../../hooks/useSearchParams";
import Skeleton from "../../../../components/skeleton/skeleton";
export default function CompanyOverview() {
  const { searchParams } = useSearchParams();
  const params = useParams();
  const {
    data: companyInfo,
    isError,
    isLoading,
  } = useCompanyInfo(params?.id as string);
  const badges = [
    {
      label: "Symbol",
    },
    {
      label: "Exchange",
    },

    {
      label: "Currency",
    },
    {
      label: "Sector",
    },
    {
      label: "Industry",
    },
  ];
  const market_cards = [
    {
      label: "50 Day Moving Average",
      value: companyInfo?.["50DayMovingAverage"],
    },
    {
      label: "200 Day Moving Average",
      value: companyInfo?.["200DayMovingAverage"],
    },
    {
      label: "Market Cap",
      value: companyInfo?.MarketCapitalization,
    },
    {
      label: "EBITDA",
      value: companyInfo?.EBITDA,
    },
    {
      label: "PEG Ratio",
      value: companyInfo?.PEGRatio,
    },
    {
      label: "P/E Ratio",
      value: companyInfo?.PERatio,
    },
    {
      label: "Beta",
      value: companyInfo?.Beta,
    },
    {
      label: "Profit Margin",
      value: companyInfo?.ProfitMargin,
    },
    {
      label: "Dividend Yield",
      value: companyInfo?.DividendYield,
    },
    {
      label: "EPS",
      value: companyInfo?.EPS,
    },
    {
      label: "Analyst Target Price",
      value: companyInfo?.AnalystTargetPrice,
    },
    {
      label: "52 Week High",
      value: companyInfo?.["52WeekHigh"],
    },
    {
      label: "52 Week Low",
      value: companyInfo?.["52WeekLow"],
    },
  ];
  return (
    <>
      {!isLoading && (
        <Card className="min-h-max p-0">
          <div className="flex xs:flex-col xs:gap-2 md:flex-row md:gap-0 justify-between border-b px-4 py-3">
            <p className="text-16 font-nunito font-400">
              {companyInfo?.Name || 'Company'} Overview
            </p>
            <p className="text-16 font-nunito font-400">
              ${searchParams?.get("price")}
            </p>
          </div>
          {!isError && (
            <>
              <div className="flex flex-wrap gap-6 py-2 px-3">
                {badges.map((p) => (
                  <Badge
                    key={p.label}
                    label={p.label}
                    value={companyInfo?.[p.label as keyof typeof companyInfo] || ''}
                  />
                ))}
              </div>
              <hr />
              <section className="py-2 px-3 flex flex-col gap-6">
                <div>
                  <p className="text-14 font-nunito font-400 text-gray-500">
                    About Company:
                  </p>
                  <p className="text-14 font-nunito font-400">
                    {companyInfo?.Description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {market_cards.map((p) => (
                    <MarketCard key={p.label} label={p.label} value={p.value || ''} />
                  ))}
                </div>
              </section>
            </>
          )}
          {isError && <p className="text-red-400 p-4 text-center">No data found</p>}
        </Card>
      )}

      {isLoading && <Skeleton />}
    </>
  );
}

const Badge = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="border rounded-md px-3 py-1 text-14 bg-gray-50 capitalize">
      {label}: {value}
    </div>
  );
};

const MarketCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <Card className="px-3 py-2 w-max flex flex-col gap-3 min-w-[140px]">
      <p className="text-14 font-nunito font-600">{label}</p>
      <p className="text-16 font-nunito font-600 text-purple-600">{value}</p>
    </Card>
  );
};
