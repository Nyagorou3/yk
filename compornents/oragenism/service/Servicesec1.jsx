import styled from "styled-components";
import Sec1main from "../../../image/service/sec1.png";
import Crean from "../../../image/common/crean.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec1 = ()=> {
  return (
    <Sinner data-scroll-section>
      <Sscimg>
      <img src={Sec1main.src} alt="service" />
      </Sscimg>
      <Ssctxt>
      <h2><span>SERVICE</span>Business
      developed
      by YK
      </h2>
      <p>YK企画の展開する事業を紹介します。</p>
      </Ssctxt>
    </Sinner>
  );
}

const Sinner = styled.section`
  font-family: futura-pt, sans-serif;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
  margin: 150px auto;
  }
  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
    margin: 55px auto;
  }
`
const Sscimg = styled.div`
  width: 50%;
  position:relative;
  @media screen and (max-width: 599px) {
    width: 65%;
    margin: 0 auto;
  }
  &::after  {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    left: -265px;
    bottom: -90px;
    width: 100%;
    height: 197px;
    background: url(${Mou.src}) no-repeat;
    @media screen and (max-width: 768px) {
        background-size: contain;
        left: -65px;
        bottom: -90px;
        width: 100%;
        height: 155px;
    }
    @media screen and (max-width: 599px) {
      left: -80px;
      bottom: -110px;
    }
  }
`

const Ssctxt = styled.div`
  width: 45%;
  position:relative;
  @media screen and (max-width: 599px) {
    width: 100%;
    margin-top: 80px;
  }
  h2{
    font-size: 60px;
    margin-bottom: 40px;
    font-weight: 600;
    line-height: 1.2;
    span {
      display: block;
      font-size: 26px;
      margin-bottom: 5px;
      @media screen and (max-width: 599px) {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 1279px) {
      font-size: 40px;
    }
    @media screen and (max-width: 599px) {
      font-size: 36px;
      margin-bottom: 20px;
    }
  }
  h3 {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    @media screen and (max-width: 599px) {
      font-size: 16px;
    }
  }
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 599px) {
      font-size: 15px;
      margin-bottom: 32px;
    }
  }
  &::before  {
    content: '';
    position: absolute;
    width: 100%;
    height: 230px;
    right: -145px;
    top: -457px;
    background: url(${Crean.src}) no-repeat;
    animation: updw2 4s 0s infinite;
    @media screen and (max-width: 768px) {
      background-size: contain;
      height: 205px;
      right: -5px;
      top: -235px;
    }
    @media screen and (max-width: 599px) {
      top: -495px;
      right: 35px;
      width: 54%;
    }
  }
`
