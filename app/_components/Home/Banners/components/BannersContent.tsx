import { getBanners } from "@/app/_lib/data-services";
import Link from "next/link";
import BannerImage from "./BannerImage";

async function BannersContent() {
  const banners = await getBanners();

  return (
    <div className="grid gap-8 pt-6 lg:grid-cols-2">
      {banners.map((banner) => (
        <Link href={banner.link} key={banner.id} scroll>
          <BannerImage alt={banner.title} src={banner.image_src} />
        </Link>
      ))}
    </div>
  );
}

export default BannersContent;
