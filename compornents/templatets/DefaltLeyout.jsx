import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";
import { Border } from "../atoms/layout/Border";
import styled from "styled-components";
import Head from 'next/head';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
      { children }
      <Footer />
      </Swrapper>
    </>
  );
};




const Swrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
