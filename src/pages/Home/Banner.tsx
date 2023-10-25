"use client";
import sliderImage1 from "@/assets/home/01.jpg";
import sliderImage2 from "@/assets/home/02.jpg";
import sliderImage3 from "@/assets/home/03.png";
import { Carousel, Grid } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;
const Banner = () => {
  const { sm } = useBreakpoint();
  return (
    <>
      <Carousel autoplay>
        <div>
          <Image
            style={
              sm
                ? { width: "100%", height: "90vh" }
                : { width: "100%", height: "60vh" }
            }
            src={sliderImage1}
            alt=""
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={sliderImage2}
            style={
              sm
                ? { width: "100%", height: "90vh" }
                : { width: "100%", height: "60vh" }
            }
            alt=""
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={sliderImage3}
            alt="image"
            style={
              sm
                ? { width: "100%", height: "90vh" }
                : { width: "100%", height: "60vh" }
            }
            objectFit="cover"
          />
        </div>
      </Carousel>
      <section></section>
    </>
  );
};

export default Banner;
