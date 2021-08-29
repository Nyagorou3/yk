import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import ASec2 from "../../../image/about/sec2.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import Kazari1 from "../../../image/common/kazari1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Aboutsec2 = ()=> {
  return (
      <Swp>
      <Sinner>
        <Ssctxt className="mask">
        <Sttl>
        <h3>人々の安心<br />
        快適に寄り添う</h3>
        </Sttl>
        <p>関わる全ての人々に便利と快適を。<br />
           その建物を利用する人や近くを通る人まで、全ての人々が便利、安心も含めた快適さを体感できるサービスを提供し続ける。
        </p>
        </Ssctxt>
        <Sscimg className="mask">
        <div className="line">
        <div className="line2">
        <div className="linewp">
        <img data-scroll="" data-scroll-speed="-1" src={ASec2.src} alt="人々の安心 快適に寄り添う" />
        </div>
        </div>
        </div>
        </Sscimg>
      </Sinner>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 85%;
    top: 50%;
    left: 0;
    background: rgba(228,221,202,.4);
    z-index: -1;
    @media screen and (max-width: 768px) {
     height: 55%;
    }
    @media screen and (max-width: 599px) {
      height: 75%;
      top: 20%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 255px;
    right: 7%;
    bottom: -60%;
    background: url(${Kazari1.src}) no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px) {
      width: 130px;
      height: 155px;
      right: 7%;
      bottom: -5%;
    }
    @media screen and (max-width: 599px) {
      width: 75px;
      height: 120px;
      right: 7%;
      bottom: -10%;
    }
  }
`

const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 90%;
  margin: 200px 0 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
  margin: 150px auto 0;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  }
  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
    margin: 55px auto;
  }
`
const Sscimg = styled.div`
  width: 65%;
  position:relative;
  &.is_show {
    .linewp {
    animation: op .8s linear 2s forwards;
    }
    .line {
    &::before {
      animation: lineAnime .5s linear 0s forwards;/*表示されて0秒後に上線が0.5秒かけて表示*/
    }
    &::after {
      animation: lineAnime .5s linear 1s forwards;/*表示されて1秒後に下線が0.5秒かけて表示*/
      }
    }
    .line2 {
      &::before {
         animation: lineAnime2 .5s linear .5s forwards;/*表示されて0.5秒後に右線が0.5秒かけて表示*/
      }
      &::after {
        animation: lineAnime2 .5s linear 1.5s forwards;/*表示されて1.5秒後に左線が0.5秒かけて表示*/
      }
    }
  }
  .linewp {
    opacity: 0;
  }
  .line {
    position:relative;
    &::before,
    &::after {
      position: absolute;
       content:"";
       width:0;
       height:1px;
       background:#333;/* 枠線の色*/
     }
     &::before {
       top:0;
       left:0;
     }
     &::after {
       bottom:0;
       right:0;
     }
    }
    .line2 {
      &::before,
      &::after {
        position: absolute;
        content:"";
        width: 1px;
        height:0;
        background:#333;/* 枠線の色*/
       }
       &::before {
         top:0;
         right:0;
       }
       &::after {
         bottom:0;
         left:0;
       }
      }
    img {
      width: 100%;
      opacity: 1;
      display: inline-block;
    }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 -17% 0 0;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
    margin: 45px -10% 0 auto;
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
    transition: 1.5s 2s opacity;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    display: flex;
    align-items: flex-start;
    margin: 45px auto;
  }
  @media screen and (max-width: 599px) {
    width: 95%;
    margin-top: 50px;
  }
  h2{
    writing-mode: vertical-rl;
    font-size: 16px;
    letter-spacing: .1em;
    margin-left: 40px;
    font-weight: 600;
    @media screen and (max-width: 1279px) {

    }
    @media screen and (max-width: 599px) {

    }
  }
  h3 {
    writing-mode: vertical-rl;
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 25px;
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
      margin-left: 65px;
    }
    @media screen and (max-width: 599px) {
      font-size: 15px;
      margin: 0 0 0 40px;
    }
  }
`
