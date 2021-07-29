import styled from "styled-components";
import { Linkssec1 } from "../compornents/oragenism/links/Linkssec1";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";
import Seo from '../compornents/Seo2'

export default function Links() {
  return (
    <DefaltLeyout>
      <Seo title="LINKS | 株式会社YK企画" description="YK企画の外部リンク情報" />
      <Swp>
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
