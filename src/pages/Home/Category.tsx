import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";

import slide1 from "@/assets/home/slide1.jpg";
import slide2 from "@/assets/home/slide2.jpg";
import slide3 from "@/assets/home/slide3.jpg";
import slide4 from "@/assets/home/slide4.jpg";
import slide5 from "@/assets/home/slide5.jpg";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";

export default function Category() {
  return (
    <>
      <section style={{ marginTop: "50px" }}>
        <SectionTitle
          subheader="From 11am to 10pm"
          header="order online"
        ></SectionTitle>
      </section>
      <section className="category-slider">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={slide1} className="slider-img" alt="slider" />
            <h2 className="categoryTitle">salad</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} className="slider-img" alt="slider" />
            <h2 className="categoryTitle">pizza</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} className="slider-img" alt="slider" />
            <h2 className="categoryTitle">soups</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} className="slider-img" alt="slider" />
            <h2 className="categoryTitle">desert</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide5} className="slider-img" alt="slider" />
            <h2 className="categoryTitle">salad</h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
