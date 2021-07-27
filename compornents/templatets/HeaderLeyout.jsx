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
.cursor,
.follower {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: none;
  posinter-events: none;
}

.cursor {
  width: 8px;
  height: 8px;
  background-color: #000;
  z-index: 1001;
}

.follower {
  width: 40px;
  height: 40px;
  background-color: #fdfe00;
  z-indes: 1000;
}
`
