import React from "react";
import { cn } from "../../lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full shadow-lg border rounded-lg bg-white  p-4", className)}>
      {children}
    </div>
  );
}
