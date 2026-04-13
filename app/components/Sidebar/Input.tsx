import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<"div">;

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent text-zinc-900 outline-none placeholder:text-zinc-600"
      {...props}
    />
  );
}

export interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-violet-500"
      {...props}
    />
  );
}
