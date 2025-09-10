"use server";

import { TABLES } from "@/app/_utils/constants";
import { Address, OrderProduct } from "@/app/_utils/types";
import { supabase } from "../supabase";
import { getUserFromCookie } from "./auth";

type OrderType = {
  address: Address;
  products: OrderProduct[];
  price: number;
};

export async function createOrder(order: OrderType) {
  const user = await getUserFromCookie();

  if (!user?.id) throw new Error("submit order failed");

  const orderRow = { ...order, user_id: user.id };

  const { error } = await supabase
    .from(TABLES.ORDERS)
    .insert(orderRow)
    .select();

  if (error) throw error;
}
