import { ReactElement, useEffect } from 'react';
import styled from "styled-components";
import Mainimg from "../../../image/top/mv_img.png";
import Mainl from "../../../image/top/mvl.png";
import Mainr from "../../../image/top/mvr.png";
import { Normalbtn } from "../../atoms/btn/Normalbtn";
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export const Mv = ()=> {


  return (
      <Smvwp>
        <SmaivTxt id="#wrapper-a">
        <h2>
        CONVENIENCE
        <br />
        AND COMFORT
        <br />
        FOR ALL
        <br />
        INVOLVED
        </h2>
        <Normalbtn />
        </SmaivTxt>
        <Smainl>
        </Smainl>
        <Smainr>
        <img src={Mainr.src} alt="YK企画" />
        </Smainr>
        <p>
        <span>
        We will continue to provide services that allow all
        </span>
        <br />
        <span>
        people, from those who use the building to those who
        </span>
        <br />
        <span>
        pass by, to experience comfort, including convenience
        </span>
        </p>
        <img src={Mainimg.src} alt="YK企画" />
      </Smvwp>
  );
}


const Smvwp = styled.div`
  position: relative;
  font-family: futura-pt, sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: left;
  min-height: 900px;
  @media screen and (max-width: 1279px) {
    min-height: 815px;
  }
  @media screen and (max-width: 599px) {
    min-height: 780px;
  }
  h2 {
    font-size: 55px;
    font-weight: 500;
    color: #f2b741;
    letter-spacing: 1em;
    line-height: 2.5;
    @media screen and (max-width: 1279px) {
      font-size: 45px;
    }
    @media screen and (max-width: 799px) {
      font-size: 36px;
    }
    @media screen and (max-width: 599px) {
      font-size: 20px;
      letter-spacing: .8em;
      margin-bottom: 15px;
    }
  }
  P {
     transform: rotate(90deg);
     position: absolute;
     right: 8%;
     top: 50%;
     @media screen and (max-width: 799px) {
        right: -2%;
     }
     @media screen and (max-width: 599px) {
        right: -8%;
        top: 24%;
     }
    span {
      background: #000;
      display: inline-block;
      color: #fff;
      padding: 5px 10px;
      font-size: 15px;
      margin-bottom: 15px;
      @media screen and (max-width: 599px) {
        padding: 3px 10px;
        font-size: 11px;
        margin-bottom: 5px;
      }
    }
  }
  img {
    position: absolute;
    right: 8%;
    max-width: 800px;
    z-index: -1;
    @media screen and (max-width: 1279px) {
      max-width: 505px;
      top: 75px;
    }
    @media screen and (max-width: 599px) {
      max-width: 275px;
      top: 60px;
      right: 40%;
    }
  }
`;

const SmaivTxt = styled.div`
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    @media screen and (max-width: 799px) {
      left: 6%;
    }
    @media screen and (max-width: 599px) {
      left: 5%;
      width: 95%;
      top: 70%;
    }
`;

const Smainl = styled.div`
    background: url(${Mainl.src}) no-repeat;
    width: 100%;
    height: 150%;
    left: 0;
    top: -101px;
    z-index: 0;
    position: absolute;
    background-size: 1770px;
    background-position: 0 -80px;
    @media screen and (max-width: 1279px) {
      background-size: 1575px;
      background-position: -85px -80px;
    }
    @media screen and (max-width: 799px) {
      background-size: 1330px;
      background-position: -200px 5px;
    }
    @media screen and (max-width: 599px) {
      background-size: 645px;
      background-position: 0 355px;
    }
`;
const Smainr = styled.div`
    position: absolute;
    right: 0;
    top: 65%;
    transform: translateY(-50%);
    width: 35%;
    height: 300px;
    @media screen and (max-width: 599px) {
      width: 115%;
      height: 330px;
      top: 5%;
    }
    img {
      width: 100%;
      max-width: 100%;
      right: 0;
    }
`;
