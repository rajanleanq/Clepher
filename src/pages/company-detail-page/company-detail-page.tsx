import CompanyChart from "./component/company-chart/company-chart";
import CompanyOverview from "./component/company-overview/company-overview";

export default function CompanyDetailPage() {
  return (
    <div className="flex flex-col xs:px-4 gap-4 my-6">
      <CompanyChart />
      <CompanyOverview />
    </div>
  );
}
