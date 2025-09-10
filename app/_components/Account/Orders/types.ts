import { OrderProduct } from "@/app/_utils/types";

type Order = {
  id: number;
  price: number;
  products: OrderProduct[];
  created_at: string;
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
}

export interface OrderModalProps {
  order: Order;
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
