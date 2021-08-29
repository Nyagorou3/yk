import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import SSec1 from "../../../image/service/sec1_1.png";
import SSec2 from "../../../image/service/sec1_2.png";
import SSec3 from "../../../image/service/sec1_3.png";
import SSec4 from "../../../image/service/sec1_4.png";
import SSec5 from "../../../image/service/sec1_5.png";
import SSec6 from "../../../image/service/sec1_6.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec2 = ()=> {
  return (
      <Swp>
      <div id="direction">
      <Sscimg>
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.05" src={SSec1.src} alt="service" />
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.08" src={SSec2.src} alt="service" />
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.11" src={SSec3.src} alt="service" />
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.17" src={SSec5.src} alt="service" />
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.14" src={SSec4.src} alt="service" />
      <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-delay="0.20" src={SSec6.src} alt="service" />
      </Sscimg>
      </div>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  margin: 200px auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Sscimg = styled.div`
display: flex;
align-items: center;
  img {
    display: inline-block;
    margin: 0 2%;
  }
`
