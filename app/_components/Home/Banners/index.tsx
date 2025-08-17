import { Suspense } from "react";
import BannersContent from "./components/BannersContent";
import BannersFallback from "./components/BannersFallback";

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
