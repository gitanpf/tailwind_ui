import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";
import classnames from "classnames";

interface SelectItemProps extends React.ComponentPropsWithoutRef<
  typeof Select.Item
> {
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative flex h-8 items-center rounded-sm pr-9 pl-7 text-sm leading-none text-zinc-900 select-none data-[disabled]:pointer-events-none data-[disabled]:text-violet-400 data-[highlighted]:bg-violet-200 data-[highlighted]:text-violet-500 data-[highlighted]:outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-7 items-center justify-center">
          <CheckIcon className="h-4 w-4" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
