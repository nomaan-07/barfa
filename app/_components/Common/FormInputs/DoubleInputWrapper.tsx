import { DoubleInputWrapperProps } from "./types";

function DoubleInputWrapper({ children }: DoubleInputWrapperProps) {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">{children}</div>
  );
}

export default DoubleInputWrapper;
