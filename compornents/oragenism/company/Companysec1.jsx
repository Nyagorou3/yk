import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import ASec1 from "../../../image/company/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Companysec1 = ()=> {
  return (
      <Sinner >
        <Sscimg className="mask">
        <div className="line">
        <div className="line2">
        <div className="linewp">
        <img data-scroll="" data-scroll-speed="-1" src={ASec1.src} alt="YKの企業情報" />
        </div>
        </div>
        </div>
        </Sscimg>
        <Ssctxt className="mask">
        <Sttl>
        <h2>COMPANY</h2>
        <h3>心を掴むものを<br /><span className="ptop">”</span>そうぞう <span className="pbottom">“</span>し続ける</h3>
        </Sttl>
        <p>人々の心を掴むもの、それは時代と共に常に変化しています。私たちはその流れを想像すると同時に、心を掴むものを私たちで創造していくことを重要視しています。</p>
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
    transition: 1.5s 1.5s opacity;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 60px 0 0;
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
    position:relative;
    .ptop {
      position: absolute;
      top: -25px;
      right: 1.5em;
      writing-mode: initial;
      @media screen and (max-width: 599px) {
        top: -15px;
      }
    }
    span.pbottom {
      position: absolute;
      left: 0;
      bottom: 90px;
      writing-mode: initial;
      @media screen and (max-width: 768px) {
        bottom: 72px;
      }
      @media screen and (max-width: 599px) {
        bottom: 50px;
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
