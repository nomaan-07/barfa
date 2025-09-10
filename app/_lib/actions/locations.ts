"use server";

export async function getCities(provinceId: number) {
  const res = await fetch(
    `https://iran-locations-api.ir/api/v1/fa/cities?state_id=${provinceId}`,
  );
  if (!res.ok) throw new Error("fetch cities failed");
  return await res.json();
}
