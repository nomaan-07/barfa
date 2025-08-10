import Category from "@/app/_components/Category";
import { CategoryParams, CategorySearchParams } from "@/app/_utils/types";

interface CategoryPageProps {
  params: CategoryParams;
  searchParams: CategorySearchParams;
}

async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  return (
    <div>
      <Category params={params} searchParams={searchParams} />
    </div>
  );
}

export default CategoryPage;
