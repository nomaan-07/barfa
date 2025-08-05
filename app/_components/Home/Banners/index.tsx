import { Suspense } from "react";
import BannersContent from "./BannersContent";
import Fallback from "./Fallback";

async function Banners() {
  return (
    <section>
      <Suspense fallback={<Fallback />}>
        <BannersContent />
      </Suspense>
    </section>
  );
}

export default Banners;
