import { CartProductType } from "@/app/_utils/types";

export type CartVariant = "panel" | "page";

export interface CartBaseProps {
  variant: CartVariant;
}

export interface CartProductProps extends CartBaseProps {
  product: CartProductType;
}

export interface CartCurrentColorProps {
  name: string;
  value: string;
}
