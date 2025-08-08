import { Suspense } from "react";
import BannersContent from "./BannersContent";
import BannersFallback from "./BannersFallback";

async function Banners() {
  return (
    <section>
      <Suspense fallback={<BannersFallback />}>
        <BannersContent />
      </Suspense>
    </section>
  );
}

export default Banners;
