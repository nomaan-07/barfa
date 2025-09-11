import dynamic from "next/dynamic";
import FavoriteButton from "./FavoriteButton";

const ShareButton = dynamic(() => import("./ShareButton"), { ssr: false });

function ProductActions() {
  return (
    <div className="mb-2 flex justify-end gap-2 lg:absolute lg:top-1 lg:left-1 lg:z-10 lg:mb-0 lg:flex-col">
      <FavoriteButton />
      <ShareButton />
    </div>
  );
}

export default ProductActions;
