interface ProductTitleProps {
  faTitle: string;
  enTitle: string;
  variant: "mobile" | "desktop";
}
function ProductTitle({ faTitle, enTitle, variant }: ProductTitleProps) {
  const isMobile = variant === "mobile";

  return (
    <div className={isMobile ? "lg:hidden" : "hidden lg:block"}>
      <h1 className="mb-2 text-sm leading-6 font-bold sm:mb-4 sm:text-lg sm:leading-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9">
        {faTitle}
      </h1>
      <p className="text-default-400 text-xs sm:text-sm">{enTitle}</p>
    </div>
  );
}

export default ProductTitle;
