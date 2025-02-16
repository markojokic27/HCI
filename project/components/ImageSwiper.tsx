"use client";

// External packages
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import "swiper/css/effect-cube";

//components
import { Arrow } from "@/components/Arrow";

export const ImageSwiper: React.FC<
  SwiperProps & { slides: React.ReactNode[] }
> = ({ className, slides, ...rest }) => {
  const pagination = {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${twMerge(
        "z-30 cursor-pointer swiper-pagination-bullet-active",
        className
      )}">${index + 1}</span>`;
    },
  };
  return (
    <div>
      <Swiper
        effect={"cube"}
        loop={true}
        pagination={pagination}
        speed={800}
        spaceBetween={16}
        modules={[Navigation, EffectCube, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        cubeEffect={{
          slideShadows: false,
          shadow: false,
        }}
        className={twMerge("", className)}
        {...rest}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-10 items-center md:mt-14 md:h-10">
        <button className="swiper-button-prev group  hidden translate-y-3 transform sm:flex  ">
          <Arrow
            variant="left"
            className="group-disabled:bg-transparent group-disabled:text-orange-800"
          />
        </button>
        <div className="custom-pagination leading-none  text-orange-800 flex justify-center gap-4 sm:gap-2 text-lg" />
        <button className="swiper-button-next group h-10 w-10 translate-y-3 ">
          <Arrow
            variant="left"
            className="rotate-180 group-disabled:bg-transparent group-disabled:text-orange-800"
          />
        </button>
      </div>
    </div>
  );
};
