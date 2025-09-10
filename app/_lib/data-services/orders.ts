import { TABLE_FIELDS, TABLES } from "@/app/_utils/constants";
import { getUserFromCookie } from "../actions";
import { supabase } from "../supabase";

export async function getOrders() {
  const currentUser = await getUserFromCookie();

  if (!currentUser) throw new Error("no user found");

  const { data: orders, error } = await supabase
    .from(TABLES.ORDERS)
    .select(TABLE_FIELDS.ORDER)
    .eq("user_id", currentUser.id)
    .order("created_at", { ascending: false });

  if (error) throw new Error("getting orders failed");

  return orders;
}
