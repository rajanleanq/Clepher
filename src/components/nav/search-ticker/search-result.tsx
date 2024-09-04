import { useNavigate } from "react-router";
import CompanySvg from "../../../assets/svg/company.svg";
import { BestMatch } from "../../../services/interface/stock-search-data.interface";

export default function SearchResult({ item }: { item: BestMatch }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/company/${item?.["1. symbol"]}`)}
      className="flex items-center gap-3 border-b py-2"
    >
      <img src={CompanySvg} alt="company" className="w-4" />
      <p className="text-[13px] text-gray-600">{item?.["2. name"]}</p>
    </div>
  );
}
