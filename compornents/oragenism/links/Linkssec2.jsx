import styled from "styled-components";
import Linkimg from "../../../image/common/link.png";
import Crean from "../../../image/common/crean.png";
import ASec1 from "../../../image/company/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Linkssec2 = ()=> {
  return (
      <Sinner  data-scroll-section>
        <Sscimg data-scroll>
        <div>
        <img data-scroll="" data-scroll-speed="-1" src={Linkimg.src} alt="LINK" />
        </div>
        </Sscimg>
        <Ssctxt data-scroll>
        <Sttl>
        <h2>LINKS</h2>
        <h3>外部リンク</h3>
        </Sttl>
        </Ssctxt>
      </Sinner>
  );
}

const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 90%;
  margin: 200px auto 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
    margin: 200px auto 30px 0;
  }
  @media screen and (max-width: 768px) {
  margin: 150px auto 0;
  flex-wrap: wrap;
  }
  @media screen and (max-width: 599px) {
    margin: 55px auto 0;
  }
`
const Sscimg = styled.div`
  width: 65%;
  position:relative;
  &.is_show {
    opacity: 1;
    div {
      &::before {
        right: 105%;
      }
    }
  }
  div {
    position:relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      background: rgba(228,221,202,1.0);
      z-index: 1;
      transition: .9s right;
    }
  }
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 0 0 -10%;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
  }
  &::before  {
    content: '';
    position: absolute;
    width: 30%;
    height: 230px;
    right: 45%;
    top: -253px;
    background: url(${Crean.src}) no-repeat;
    animation: updw2 4s 0s infinite;
    background-size: contain;
    @media screen and (max-width: 768px) {
      background-size: contain;
      height: 75px;
      right: -65px;
      top: -115px;
    }
    @media screen and (max-width: 599px) {
      height: 75px;
      right: 48%;
      top: -45px;
    }
  }
`

const Sttl = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
@media screen and (max-width: 599px) {
  width: 35%;
}
`

const Ssctxt = styled.div`
  width: 30%;
  position:relative;
  opacity: 0;
  &.is_show {
    opacity: 1;
    transition: 1.5s .8s opacity;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 60px auto 0;
    width: 90%;
  }
  @media screen and (max-width: 599px) {
    width: 95%;
    margin-top: 40px;
  }
  h2{
    writing-mode: vertical-rl;
    font-size: 16px;
    letter-spacing: .1em;
    margin-left: 40px;
    font-weight: 600;
    @media screen and (max-width: 599px) {
      margin-left: 24px;
      font-size: 13px;
    }
  }
  h3 {
    writing-mode: vertical-rl;
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 25px;
    .ptop {
      display: inline-block;
      transform: rotate(90deg) translate(-10px,-20px);
      @media screen and (max-width: 599px) {
        transform: rotate(90deg) translate(-10px,-10px);
      }
    }
    span.pbottom {
      display: inline-block;
      transform: rotate(90deg) translate(-10px,20px);
      @media screen and (max-width: 599px) {
        transform: rotate(90deg) translate(-10px,10px);
      }
    }
    @media screen and (max-width: 1279px) {
      font-size: 24px;
    }
    @media screen and (max-width: 599px) {
      font-size: 16px;
    }
  }
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      width: 60%;
      margin: 0;
    }
    @media screen and (max-width: 599px) {
      font-size: 14px;
      margin-bottom: 32px;
    }
  }
`
