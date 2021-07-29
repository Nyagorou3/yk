import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";
import { BorderW } from "../atoms/layout/BorderW";
import styled from "styled-components";
import Head from 'next/head';



export default function HeaderLeyout({ children }) {
  return (
    <>
    <Swrapper>
    <Head>
    <link rel="stylesheet" href="https://use.typekit.net/bze5nui.css" />
    </Head>
    <div className="cursor"></div>
    <div className="follower"></div>
      <BorderW />
      <Header />
      {children}
    </Swrapper>
    </>
  );
};

const Swrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
  z-index: 0;
`
