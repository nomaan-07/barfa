import { CartCurrentColorProps } from "../types";

function CartCurrentColor({ name, value }: CartCurrentColorProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span>رنگ:</span>
      <span>{name}</span>
      <div
        className="border-default-100 size-4 rounded-full border"
        style={{ backgroundColor: value }}
      ></div>
    </div>
  );
}

export default CartCurrentColor;
