import React from "react";
import { cn } from "../../lib/utils";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("text-green-500 font-nunito text-14", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
