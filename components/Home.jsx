"use client";
import React from "react";
import HeroSection from "./HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import Banner from "./Banner";
import  '../app/globals.css'
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { Container } from "@mui/material";
import Section5 from "./Section5";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      {/* <Container> */}
        <Swiper
          modules={[Navigation, Pagination]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          // scrollbar
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <HeroSection />
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
        </Swiper>
      {/* </Container> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Banner/>
      <Section5/>
      <Footer/>
    </Box>
  );
};

export default Home;
