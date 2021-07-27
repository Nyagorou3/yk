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
        '#wrapper-a h2',
        { opacity: 0 }, //fromの設定
        {  //toの設定
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '#wrapper-a',
            start: 'top center', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        }
      )
    }
  return (
      <Sinner>
        <Sscimg>
        <img src={Sec1main.src} alt="about YK" />
        </Sscimg>
        <Ssctxt id="wrapper-a">
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
