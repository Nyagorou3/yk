import styled from "styled-components";
import Kazari1 from "../../../image/common/kazari1.png";
import Seckazari from "../../../image/common/seckazari.png";
import Blog1 from "../../../image/top/blog1.png";
import Blog2 from "../../../image/top/blog2.png";
import Blog3 from "../../../image/top/blog3.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";
import { Txtbtnl } from "../../atoms/btn/Txtbtnl";
import Link from "next/link";


export default function TopBlog() {
  return (
      <Sinner>
        <Swrap>
        <h2>
        BLOG
        </h2>
        <SblogList>

        </SblogList>
        <Txtbtnl to="/" btntxt="VIEW ALL" />
        </Swrap>
      </Sinner>
  );
}


const Sinner = styled.section`
  position:relative;
  font-family: futura-pt, sans-serif;
  width: 100%;
  margin: 200px auto;
  color: #000;
  @media screen and (max-width: 599px) {
    margin: 100px auto;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 60%;
    left: 0;
    top: 5%;
    background: rgba(228,221,202,.4);
    z-index: -1;
  }

  h2{
    padding-top: 150px;
    position:relative;
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
    @media screen and (max-width: 768px) {
      padding-top: 85px;
      font-size: 36px;
      margin-bottom: 20px;
    }
    .kazari {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const Swrap = styled.div`
  width: 80%;
  margin-left: auto;
  text-align: left;
`
const SblogList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 55px;
  li {
    width: 32%;
    margin-right: 5%;
    img {
      width: 100%;
    }
    time {
      margin-top: 15px;
      display: block;
    }
    p {
      margin: 5px 0 0;
    }
  }
`
