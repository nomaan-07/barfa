"use client";

import { Button } from "@heroui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Item {
  id: string;
  imageSrc: string;
  mobileImageSrc: string;
  title: string;
  caption: string;
  href: string;
  buttonContent: string;
}

const items: Item[] = [
  {
    id: "1",
    imageSrc: "/hero/products.png",
    mobileImageSrc: "/hero/products.png",
    title: "برفا؛ تکنولوژی در دستان شما",
    caption:
      "تنوع بی‌نظیر محصولات، قیمت‌های رقابتی، و ضمانت اصل بودن کالا. با برفا خریدی مطمئن و لذت‌بخش را تجربه کنید!",
    href: "/category/all",
    buttonContent: "مشاهده همه محصولات",
  },
  {
    id: "2",
    imageSrc: "/hero/smartphones.png",
    mobileImageSrc: "/hero/smartphones-mobile.png",
    title: "گوشی رویایی شما همین‌جاست!",
    caption:
      "جدیدترین مدل‌های گوشی با بهترین قیمت‌ها. همین حالا انتخاب کنید و تجربه‌ای متفاوت داشته باشید.",
    href: "/category/mobile",
    buttonContent: "مشاهده گوشی‌ها",
  },
  {
    id: "3",
    imageSrc: "/hero/laptops.png",
    mobileImageSrc: "/hero/laptops.png",
    title: "لپ‌تاپ حرفه‌ای برای شما",
    caption:
      "برای کار، بازی، یا خلق ایده‌های جدید. بهترین لپ‌تاپ‌ها را همین حالا پیدا کنید.",
    href: "/category/laptop",
    buttonContent: "بررسی لپ‌تاپ‌ها",
  },
  {
    id: "4",
    imageSrc: "/hero/headphone.png",
    mobileImageSrc: "/hero/headphone-mobile.png",
    title: "صدای شفاف، کیفیت بی‌نظیر",
    caption:
      "هدفون‌هایی با کیفیت عالی برای موسیقی، تماس و آرامش. بهترین انتخاب برای تجربه صوتی متفاوت.",
    href: "/category/headphone",
    buttonContent: "مشاهده هدفون‌ها",
  },
];

function Hero() {
  return (
    <section className="group relative">
      <Swiper
        className="relative h-[86vh] w-full overflow-hidden"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet--active",
          clickable: true,
        }}
        navigation={{
          prevEl: ".hero-prev-btn",
          nextEl: ".hero-next-btn",
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["-100%", 0, 0],
          },
        }}
        modules={[Pagination, Autoplay, Navigation, EffectCreative]}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.imageSrc}
              fill
              priority
              quality={80}
              alt="تجربه بهترین خرید با برفا"
              className="hidden object-center md:block"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <Image
              src={item.mobileImageSrc}
              fill
              priority
              quality={80}
              alt="تجربه بهترین خرید با برفا"
              className="object-cover object-center md:hidden"
              sizes="(max-width: 768px) 100vw, 1280px"
            />

            {/* Dark overlay*/}
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/20"></div>

            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
              <h2 className="mb-4 max-w-5xl text-4xl leading-tight font-extrabold md:text-5xl lg:text-6xl">
                {item.title}
              </h2>

              <p className="mb-8 text-lg md:text-xl lg:mb-10 lg:text-2xl">
                {item.caption}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  as={Link}
                  href={item.href}
                  color="primary"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  {item.buttonContent}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-16 left-6 z-30 flex items-center gap-3 transition-all lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
        <Button isIconOnly className="hero-prev-btn">
          <LucideChevronRight />
        </Button>
        <Button isIconOnly className="hero-next-btn">
          <LucideChevronLeft />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
