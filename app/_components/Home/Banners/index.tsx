import { getBanners } from "@/app/_lib/data-service";
import Link from "next/link";
import BannerImage from "./BannerImage";

async function Banners() {
  const banners = await getBanners();

  if (!banners) return null;

  return (
    <section>
      <div className="grid gap-8 pt-6 lg:grid-cols-2">
        {banners.map((banner) => (
          <Link href={banner.link} key={banner.id}>
            <BannerImage alt={banner.title} src={banner.image_src} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Banners;
