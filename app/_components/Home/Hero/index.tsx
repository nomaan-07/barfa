"use client";

import { heroItems } from "@/app/_data/heroItems";
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

function Hero() {
  const titleClasses =
    "mb-2 text-xl leading-tight font-extrabold sm:text-3xl md:mb-3 md:text-4xl lg:mb-4 lg:text-5xl xl:text-6xl";

  return (
    <section className="group relative">
      <Swiper
        className="relative aspect-video w-full overflow-hidden xl:h-[80vh]"
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
        {heroItems.map(
          ({ id, title, caption, imageSrc, href, buttonContent }, index) => (
            <SwiperSlide key={id}>
              <Link
                href={href}
                className="bg-background relative block size-full select-none"
              >
                <Image
                  src={imageSrc}
                  fill
                  alt={title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1920px"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  priority={index === 0}
                  className="object-cover"
                />

                {/* Dark overlay*/}
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/20"></div>

                <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
                  {index === 0 ? (
                    <h1 className={titleClasses}>{title}</h1>
                  ) : (
                    <h2 className={titleClasses}>{title}</h2>
                  )}

                  <p className="mb-4 text-sm sm:text-lg md:mb-6 md:text-xl lg:mb-10 lg:text-2xl">
                    {caption}
                  </p>

                  <div className="bg-primary flex h-9 w-fit items-center justify-center rounded-lg px-3 text-xs sm:h-12 sm:rounded-xl sm:px-6 sm:text-base">
                    {buttonContent}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      <div className="invisible absolute bottom-16 left-6 z-30 hidden items-center gap-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:flex">
        <Button isIconOnly className="hero-prev-btn" aria-label="اسلاید قبلی">
          <LucideChevronRight />
        </Button>
        <Button isIconOnly className="hero-next-btn" aria-label="اسلاید بعدی">
          <LucideChevronLeft />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
