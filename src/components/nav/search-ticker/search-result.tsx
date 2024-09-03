import CompanySvg from "../../../assets/svg/company.svg";

export default function SearchResult({ item }: any) {
  return (
    <div className="flex items-center gap-3 border-b py-2">
      <img src={CompanySvg} alt="company" className="w-4" />
      <p className="text-[13px] text-gray-600">{item?.["2. name"]}</p>
    </div>
  );
}
