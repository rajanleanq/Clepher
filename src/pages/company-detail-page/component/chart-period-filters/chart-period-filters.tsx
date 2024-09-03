import React from "react";
import { cn } from "../../../../lib/utils";

export interface FilterButtonProps {
  title: string;
  onClick?: () => void;
  active?: boolean;
  first_child?: boolean;
}

export default function PeriodButton({
  title,
  onClick,
  active = false,
  first_child,
}: FilterButtonProps) {
  return (
    <p
      onClick={onClick}
      className={cn(
        "text-13 cursor-pointer uppercase font-semibold flex items-center gap-1  border-l  px-2 py-1 ",
        active && "bg-gray-100",
        first_child && "border-l-0",
      )}
    >
      {title}
    </p>
  );
}
