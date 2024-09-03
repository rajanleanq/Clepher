import { cn } from "../../lib/utils";

export interface ITabs {
  label: string;
  value: string;
}
export default function TabComponent({
  tabs,
  onChange,
  tab_index,
}: {
  tabs: ITabs[];
  onChange: (value: string) => void;
  tab_index?: string;
}) {
  return (
    <>
      <div className="flex items-center gap-10 border-b-1 border-solid border-gray-100 md:flex">
        {tabs?.map((p) => (
          <div
            key={p?.value}
            onClick={() => onChange(p?.value)}
            className={cn(
              "flex gap-3 items-center  cursor-pointer  border-b-1  border-solid border-transparent mb-[-1px] pb-2",
              p?.value === tab_index && "border-borders-focus"
            )}
          >
            <p className="xs:text-[12px] md:text-14 md:leading-14 text-gray-600 font-400 font-nunito hover:scale-105 transition-all animate-in duration-200">
              {p?.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
