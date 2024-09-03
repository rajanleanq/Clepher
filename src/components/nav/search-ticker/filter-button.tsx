import { Button } from "../../button/button";
import { cn } from "../../../lib/utils";

export default function FilterButton({ filter, isActive, onClick }: any) {
  return (
    <Button
      className={cn(
        "px-4 py-1 ease-in-out transition-all hover:scale-105",
        isActive
          ? "bg-green-500 text-[14px] rounded-md text-white"
          : "text-green-500 text-[14px]"
      )}
      onClick={onClick}
    >
      <span className="capitalize">{filter}</span>
    </Button>
  );
}
