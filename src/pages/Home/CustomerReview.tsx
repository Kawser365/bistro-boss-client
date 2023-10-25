import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Flex, Grid } from "antd";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const { useBreakpoint } = Grid;
const review = [
  {
    _id: "643010e0f5a7e52ce1e8fa65",
    name: "Jane Doe",
    details:
      "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: 3,
  },
  {
    _id: "643010f9f5a7e52ce1e8fa66",
    name: "John Doe",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    rating: 2,
  },
  {
    _id: "6430110af5a7e52ce1e8fa67",
    name: "MJ Doe",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    rating: 5,
  },
  {
    _id: "64301123f5a7e52ce1e8fa68",
    name: "Sarah Smith",
    details:
      "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
    rating: 4,
  },
  {
    _id: "6430113af5a7e52ce1e8fa69",
    name: "Robert Johnson",
    details:
      "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
    rating: 5,
  },
];
const CustomerReview = () => {
  const { lg } = useBreakpoint();
  return (
    <div style={{ marginTop: "50px" }}>
      <SectionTitle
        subheader="what our client says"
        header="Testimonials"
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
      >
        {review.map((item): any => (
          <SwiperSlide>
            <Flex
              gap="middle"
              align="center"
              vertical
              style={{ padding: "15px 0px" }}
            >
              <div>
                <Rating value={item.rating} style={{ width: "250px" }} />
              </div>
              <div>
                <FaQuoteLeft style={{ width: "30px", height: "30px" }} />
              </div>
              <p
                style={lg ? { padding: "0px 150px" } : { padding: "0px 50px" }}
              >
                {item.details}
              </p>
              <h3
                style={{
                  color: "#fbb034",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </h3>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
