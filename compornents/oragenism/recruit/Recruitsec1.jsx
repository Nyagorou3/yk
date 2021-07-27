import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec1 from "../../../image/recruit/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec1 = ()=> {
  return (
      <Swp id="section1" className={'section' + ' ' + 'section1'}>
        <Stxtwp>
        <h1>
        働き方<br />
        <span>∞</span>
        </h1>
        <p>ムゲン</p>
        </Stxtwp>
        <Simgwp>
          <img src={RSec1.src} alt="働き方無限" />
        </Simgwp>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`
const Stxtwp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  h1 {
    font-size: 55px;
    font-weight: 900;
    line-height: 1;
    @media screen and (max-width: 599px) {
      font-size: 25px;
    }
    span {
      font-size: 90px;
      @media screen and (max-width: 599px) {
        font-size: 80px;
      }
    }
  }
  p {
    font-size: 100px;
    margin: 0;
    font-weight: 900;
    letter-spacing: 3px;
    @media screen and (max-width: 599px) {
      font-size: 50px;
    }
  }
`

const Simgwp = styled.div`
position: absolute;
top: 54%;
left: 50%;
min-width: 500px;
transform: translate(-50%, -50%);
z-index: -1;
@media screen and (max-width: 599px) {
  min-width: 80%;
}
`
