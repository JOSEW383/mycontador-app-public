"use client";

// TODO: Refactor
const images = [
  "/Screenshots/A.png",
  "/Screenshots/B.png",
  "/Screenshots/C.png",
  "/Screenshots/D.png",
  "/Screenshots/E.png",
  "/Screenshots/F.png",
  "/Screenshots/G.png",
  "/Screenshots/H.png",
  "/Screenshots/I.png",
  "/Screenshots/J.png",
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/navigation";
import classes from "@/styles/CarouselLanding.module.css";

export default function CarouselLanding() {
  const slides = images.map((url) => (
    <SwiperSlide key={url} className={classes.swiperSlide}>
      <div className="swiper-zoom-container">
        <Image
          className={classes.swiperImage}
          width={300}
          height={550}
          alt={"screenshot"}
          src={url}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="gallery">
      <div className={classes.swiperContainer}>
        <Swiper
          loop={true}
          centeredSlides={true}
          zoom={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation, Zoom]}
        >
          {...slides}
        </Swiper>
      </div>
      </section>
  );
}
