import { OrderProductListProps } from "../types";
import OrderProduct from "./OrderProduct";

function OrderProductList({ products }: OrderProductListProps) {
  return (
    <div className="divide-default-200 border-default-200 divide-y rounded-xl border">
      {products.map((product) => (
        <OrderProduct key={product.cartId} product={product} />
      ))}
    </div>
  );
}

export default OrderProductList;
