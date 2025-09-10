import { OrderProduct } from "@/app/_utils/types";

type Order = {
  id: number;
  price: number;
  products: OrderProduct[];
};

export interface OrdersProps {
  orders: Order[];
}

export interface OrdersTabTitleProps {
  count: number;
  title: string;
}

export interface OrderRowProps {
  order: Order;
  currentOrder: string;
}

export interface OrderModalProps {
  order: Order;
  currentOrder: string;
  totalProducts: number;
}

export interface EmptyOrdersProps {
  title?: string;
}

export interface OrderProductProps {
  product: OrderProduct;
}

export interface OrderProductListProps {
  products: OrderProduct[];
}
