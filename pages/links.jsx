import styled from "styled-components";
import { Linkssec1 } from "../compornents/oragenism/links/Linkssec1";
import { Linkssec2 } from "../compornents/oragenism/links/Linkssec2";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";
import Seo from '../compornents/Seo2';
import Loading from '../compornents/Loading';
import { ReactElement, useEffect, useState } from 'react';


export default function Links() {
  const [ isShowLoading, setIsShowLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 2000);
  });

  return (
    <DefaltLeyout>
      <Seo title="LINKS | 株式会社YK企画" description="YK企画の外部リンク情報" />
      <Loading isShow={ isShowLoading }  />
      <Swp>
      <Linkssec2 />
      <Linkssec1 />
      </Swp>
    </DefaltLeyout>
  );
};


const Swp = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 100%;
    top: 9%;
    right: 0;
    background: rgba(228,221,202,.4);
    z-index: -1;
    @media screen and (max-width: 599px) {
      top: 8%;
      height: 100%;
    }
  }
`
