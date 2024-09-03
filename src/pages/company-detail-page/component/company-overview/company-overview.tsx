import Card from "../../../../components/card/card";
export default function CompanyOverview() {
  const badges = [
    {
      label: "symbol",
      value: "",
    },
    {
      label: "exchange",
      value: "",
    },

    {
      label: "currency",
      value: "",
    },
    {
      label: "sector",
      value: "",
    },
    {
      label: "industry",
      value: "",
    },
  ];
  const market_cards = [
    {
      label: "50 Day Moving Average",
      value: "",
    },
    {
      label: "200 Day Moving Average",
      value: "",
    },
    {
      label: "50 Day Moving Average",
      value: "",
    },
    {
      label: "Market Cap",
      value: "",
    },
    {
      label: "EBITDA",
      value: "",
    },
    {
      label: "PEG Ratio",
      value: "",
    },
    {
      label: "P/E Ratio",
      value: "",
    },
    {
      label: "Beta",
      value: "",
    },
    {
      label: "Profit Margin",
      value: "",
    },
    {
      label: "Dividend Yield",
      value: "",
    },
    {
      label: "EPS",
      value: "",
    },
    {
      label: "Analyst Target Price",
      value: "",
    },
    {
      label: "52 Week High",
      value: "",
    },
    {
      label: "52 Week Low",
      value: "",
    },
  ];
  return (
    <Card className="min-h-max p-0">
      <div className="flex  justify-between border-b px-4 py-3">
        <p className="text-16 font-nunito font-400">Company Name</p>
        <p className="text-16 font-nunito font-400">$0.14</p>
      </div>
      <div className="flex flex-wrap gap-6 py-2 px-3">
        {badges.map((p) => (
          <Badge key={p.label} label={p.label} value={p.value} />
        ))}
      </div>
      <hr />
      <section className="py-2 px-3 flex flex-col gap-6">
        <div>
        <p className="text-14 font-nunito font-400 text-gray-500">
          About Company:
        </p>
        <p className="text-14 font-nunito font-400">Description</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {market_cards.map((p) => (
            <MarketCard key={p.label} label={p.label} value={p.value} />
          ))}
        </div>
      </section>
    </Card>
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
