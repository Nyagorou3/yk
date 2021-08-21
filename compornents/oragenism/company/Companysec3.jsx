import styled from "styled-components";
import Sec4main from "../../../image/top/sec4main.png";
import Sec4sub1 from "../../../image/top/sec4sub1.png";
import Sec4sub2 from "../../../image/top/sec4sub2.png";
import Kazari1 from "../../../image/common/kazari1.png";

import CSec3 from "../../../image/company/sec3.png";

import { Txtbtn } from "../../atoms/btn/Txtbtn";
import { TxtbtnlW } from "../../atoms/btn/TxtbtnlW";

export const Companysec3 = ()=> {
  return (
      <Srwap >
      <Sinner>
        <Sscimg className="mask">
        <div>
        <img data-scroll="" data-scroll-speed="-1" src={CSec3.src} alt="GREETING" />
        </div>
        </Sscimg>
        <Ssctxt className="mask">
        <div>
        <h2>GREETING</h2>
        <h3>ご挨拶</h3>
        <p>
        YK企画では学歴や経歴は関係ありません。<br />
        自由な発想を持った誠実な人材を募集しています。<br />
        あなたも新しいことを一緒にYKで始めてみませんか？
        </p>
        </div>
        </Ssctxt>
      </Sinner>
      </Srwap>
  );
}


const Srwap = styled.div`
position:relative;
&::before  {
  content: '';
  position: absolute;
  width: 100%;
  height: 120%;
  right: 0;
  top: -10%;
  background: #000;
  z-index: 0;
  @media screen and (max-width: 599px) {
  width: 100%;
  top: -5%;
  height: 110%;
  }
}
`
const Sinner = styled.section`
  font-family: futura-pt, sans-serif;
  position:relative;
  width: 80%;
  margin: 250px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 1279px) {
    margin: 160px auto;
  }
  @media screen and (max-width: 599px) {
  flex-wrap: wrap;
  width: 85%;
  margin: 70px auto 55px;
  }
`
const Sscimg = styled.div`
  width: 45%;
  position:relative;
  @media screen and (max-width: 599px) {
    width: 65%;
    margin: 0 auto 0;
  }
  &::before  {
    content: '';
    position: absolute;
    left: -170px;
    top: -135px;
    width: 100%;
    height: 282px;
    background: url(${Sec4sub2.src}) no-repeat;
    z-index: 1;
    @media screen and (max-width: 799px) {
      background-size: contain;
      width: 45%;
      top: -110px;
      left: -60px;
    }
    @media screen and (max-width: 599px) {
      top: -50px;
    }
  }
  &::after  {
    content: '';
    position: absolute;
    right: -405px;
    bottom: -110px;
    width: 100%;
    height: 194px;
    background: url(${Sec4sub1.src}) no-repeat;
    @media screen and (max-width: 1279px) {
      right: -245px;
    }
    @media screen and (max-width: 799px) {
      background-size: contain;
      width: 55%;
      right: -70px;
      bottom: -170px;
    }
  }
`

const Ssctxt = styled.div`
  width: 45%;
  position:relative;
  display: flex;
  justify-content: center;
  opacity: 0;
  &.is_show {
    opacity: 1;
    transition: 1.5s .8s opacity;
  }
  @media screen and (max-width: 599px) {
  width: 100%;
  margin-top: 70px;
  }
  h2{
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    @media screen and (max-width: 1279px) {
      font-size: 40px;
    }
    @media screen and (max-width: 799px) {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 599px) {
    font-size: 16px;
    margin-bottom: 15px;
    }
    }
  h3 {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    @media screen and (max-width: 599px) {
      font-size: 20px;
    }
  }
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 599px) {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
`
