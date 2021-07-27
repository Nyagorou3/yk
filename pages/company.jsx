import styled from "styled-components";
import { Companysec1 } from "../compornents/oragenism/company/Companysec1";
import { Companysec2 } from "../compornents/oragenism/company/Companysec2";
import { Companysec3 } from "../compornents/oragenism/company/Companysec3";
import { Companysec4 } from "../compornents/oragenism/company/Companysec4";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";

export default function Company() {
  return (
    <DefaltLeyout>
      <Swp>
      <Companysec1 />
      <Companysec2 />
      <Companysec3 />
      <Companysec4 />
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
