import styled from "styled-components";
import { ReactElement, useEffect } from 'react';
import Sec1main from "../../../image/top/sec1main.png";
import Crean from "../../../image/common/crean.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn }  from "../../atoms/btn/Txtbtn";
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const TopAbout = ()=> {
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  const setAnimation = () => {
      gsap.fromTo(
        '.fade',
        { opacity: 0 }, //fromの設定
        {  //toの設定
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.fade-w',
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
          stagger: {
            from: "start",
            amount: 0.8,
          }
        }
      )
    }

  return (
      <Sinner>
        <Sscimg className="mask">
        <div className="line">
        <div className="line2">
        <div className="linewp">
        <img src={Sec1main.src} alt="about YK" />
        </div>
        </div>
        </div>
        </Sscimg>
        <Ssctxt className="mask">
        <h2>ABOUT YK</h2>
        <h3>関わる全ての人々に便利と快適を。</h3>
        <p>その建物を利用する人や近くを通る人まで、全ての人々が便利、安心も含めた快適さを体感できるサービスを提供し続ける。</p>
        <Txtbtn to="/about" btntxt="MORE" />
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
  &.is_show {
    .linewp {
    animation: op .8s linear 2.5s forwards;
    }
    .line {
    &::before {
      animation: lineAnime .8s linear 0s forwards;/*表示されて0秒後に上線が0.5秒かけて表示*/
    }
    &::after {
      animation: lineAnime .8s linear 1s forwards;/*表示されて1秒後に下線が0.5秒かけて表示*/
      }
    }
    .line2 {
      &::before {
         animation: lineAnime2 .8s linear .8s forwards;/*表示されて0.5秒後に右線が0.5秒かけて表示*/
      }
      &::after {
        animation: lineAnime2 .8s linear 2s forwards;/*表示されて1.5秒後に左線が0.5秒かけて表示*/
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
  }

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
  transition: .8s 1.5s opacity;
  &.is_show {
    opacity: 1;
    transition: .8s opacity;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
    margin-top: 80px;
  }
  h2{
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
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
      top: -555px;
      width: 54%;
    }
  }
`
