import clsx from "clsx";

export type AccountButtonSize = "lg" | "md";

export const IconSize = (size: AccountButtonSize) => (size === "lg" ? 24 : 20);

export function getButtonClasses(size: AccountButtonSize, active?: boolean) {
  return clsx(
    "text-foreground h-12 justify-start pr-4",
    size === "lg" ? "mb-4 text-lg" : "text-sm",
    active &&
      "bg-primary data-[hover=true]:bg-primary text-white data-[hover=true]:cursor-default data-[hover=true]:text-white",
  );
}
