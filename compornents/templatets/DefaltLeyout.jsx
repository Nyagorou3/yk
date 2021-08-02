import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";
import { Border } from "../atoms/layout/Border";
import styled from "styled-components";
import Head from 'next/head';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactElement, useEffect } from 'react';
import {TweenMax,TimelineMax} from "gsap";

export default function DefaltLeyout({ children }) {

  return (
    <>
    <Swrapper>
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/bze5nui.css" />
      </Head>
      <div id="cursor"></div>
      <Border />
      <Header />
      <div data-scroll-container className="scwp">
      { children }
      <Footer />
      </div>
      </Swrapper>
    </>
  );
};




const Swrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .scwp {
    min-height: 100vh;
    overflow: hidden;
    margin-top: -80px;
    @media screen and (max-width: 768px) {
      margin-top: -25px;
    }
    @media screen and (max-width: 599px) {
      margin-top: 0;
    }
  }
`
