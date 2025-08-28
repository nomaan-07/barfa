import NotFoundPage from "@/app/_components/Common/NotFoundPage";

function ProductNotFound() {
  return (
    <NotFoundPage
      description="محصول وجود ندارد یا حذف شده است."
      buttonText="همه‌ی محصولات"
      href="/category/all"
    />
  );
}

export default ProductNotFound;
