import { useState } from "react";
import TabComponent, { ITabs } from "../../../components/tabs/tabs";
import useSearchParams from "../../../hooks/useSearchParams";

export default function LandingPageTabs({
  handleTabChange,
}: {
  handleTabChange: (payload: string) => void;
}) {
  const { searchParams, setSearchParams } = useSearchParams();
  const [tab_index, setTabIndex] = useState<string>(
    searchParams?.get("tabs") || "top_gainers"
  );
  const tabs: ITabs[] = [
    {
      label: "Top Gainers",
      value: "top_gainers",
    },
    {
      label: "Top Losers",
      value: "top_losers",
    },
    {
      label: "Most Actively Traded",
      value: "most_actively_traded",
    },
  ];
  const changeHandler = (value: string) => {
    setSearchParams({
      tabs: value?.toString(),
    });
    setTabIndex(value);
    handleTabChange(value);
  };
  return (
    <div className="">
      <TabComponent
        onChange={(value: string) => changeHandler(value)}
        tab_index={tab_index}
        tabs={tabs}
      />
    </div>
  );
}
