import { useState } from "react";
import Skeleton from "../../components/skeleton/skeleton";
import { useTopGainerLoser } from "../../services/useTopGainerLoser";
import GainerLoserDataTable from "./component/gainer-losers-data-table";
import LandingPageTabs from "./component/landing-page-tabs";
import useSearchParams from "../../hooks/useSearchParams";

export default function LandingPage() {
  const {searchParams} = useSearchParams();
  const [tab_name, setTabName] = useState<string>(searchParams?.get('tabs') ?? "top_gainers");
  const { data: GainerLoserData, isError, isLoading } = useTopGainerLoser();
  if (isError) {
    return (
      <div className="mx-auto">
        Some Error has occured. Please try after sometime.
      </div>
    );
  }
  const handleTabChange = (payload:string) => {
    setTabName(payload);
  };
  return (
    <div className="xs:px-4 md:px-8 xs:py-3 md:py-5 flex flex-col gap-4  w-full h-max min-h-screen">
      <div className="xs:p-4 md:p-6 bg-white rounded-[8px] flex flex-col h-full">
        <LandingPageTabs handleTabChange={handleTabChange} />
        <div className="w-full xs:overflow-x-auto lg:overflow-hidden">
          <GainerLoserDataTable
            data={GainerLoserData?.[tab_name]}
            isLoading={isLoading}
          />
          {isLoading && <Skeleton />}
        </div>
      </div>
    </div>
  );
}
