import styled from "styled-components";
import Sec1main from "../../../image/service/sec1.png";
import Crean from "../../../image/common/crean.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec1 = ()=> {
  return (
    <Sinner>
      <Sscimg className="mask">
      <div className="line">
      <div className="line2">
      <div className="linewp">
      <img src={Sec1main.src} alt="service" />
      </div>
      </div>
      </div>
      </Sscimg>
      <Ssctxt  className="mask">
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
  width: 40%;
  position:relative;
  img {
    width: 100%;
  }
  @media screen and (max-width: 599px) {
    width: 65%;
    margin: 0 auto;
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
    z-index: 2;
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
  opacity: 0;
  &.is_show {
    opacity: 1;
    transition: 1.5s 2.5s opacity;
  }
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
