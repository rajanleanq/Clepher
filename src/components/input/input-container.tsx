import { cn } from "../../lib/utils";
import { IInputField } from "./input.interface";
export function InputContainer({
  label,
  leadingIcon,
  trailingIcon,
  className,
  children,
}: IInputField): JSX.Element {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex">
        {label && (
          <label
            className="text-zinc-600 text-13 font-semibold font-nunito leading-13 capitalize"
            htmlFor={label}
          >
            {label}
          </label>
        )}
      </div>
      <div
        className={cn(
          "border border-borders-input bg-white  px-2 rounded-[5px] m-0 py-[8px] flex focus-within:border-borders-focus shadow-xs items-center",
          className
        )}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </div>
    </div>
  );
}
