import styled from "styled-components";
import { Recruitsec1 } from "../compornents/oragenism/recruit/Recruitsec1";
import { Recruitsec2 } from "../compornents/oragenism/recruit/Recruitsec2";
import { Recruitsec3 } from "../compornents/oragenism/recruit/Recruitsec3";
import { Recruitsec4 } from "../compornents/oragenism/recruit/Recruitsec4";
import { Recruitsec5 } from "../compornents/oragenism/recruit/Recruitsec5";
import { Recruitsec6 } from "../compornents/oragenism/recruit/Recruitsec6";
import { Recruitsec7 } from "../compornents/oragenism/recruit/Recruitsec7";
import Seo from '../compornents/Seo'

import { Link as Scroll } from 'react-scroll';
import HeaderLeyout  from "../compornents/templatets/HeaderLeyout";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);


export default function Recruit() {
  return (
      <>
      <HeaderLeyout>
      <Seo title="採用について | 株式会社YK企画" description="採用について | YK企画は様々な働き方を提案します。" />
      <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{
  "clickable": true
}} className="mySwiper">
      <SwiperSlide><Recruitsec1 /></SwiperSlide>
      <SwiperSlide><Recruitsec2 /></SwiperSlide>
      <SwiperSlide><Recruitsec3 /></SwiperSlide>
      <SwiperSlide><Recruitsec4 /></SwiperSlide>
      <SwiperSlide><Recruitsec5 /></SwiperSlide>
      <SwiperSlide><Recruitsec7 /></SwiperSlide>
      <SwiperSlide><Recruitsec6 /></SwiperSlide>
      </Swiper>
      </HeaderLeyout>
      </>
  );
};

const Srecwp = styled.section`
  /* height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; */
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
  background: linear-gradient(0deg,#43e2c6,#3183d0);
  border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
  background: rgba(100,100,100, .5);
  }
  nav {
    position: fixed;
    transform: translateY(-50%);
    top: 50%;
    left: 5%;
    @media screen and (max-width: 599px) {
      top: 33px;
      left: 5%;
      display: flex;
      transform: translateY(0);
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 25px;
      color: #fff;
      border: 1px solid;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      @media screen and (max-width: 599px) {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-right: 10px;
      }
     }
  }
`
