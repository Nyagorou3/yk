import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";
import { Border } from "../atoms/layout/Border";
import styled from "styled-components";
import Head from 'next/head';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import {TweenMax,TimelineMax} from 'gsap/dist/gsap';



export default function DefaltLeyout({ children }) {

  const scrollRef = useRef();

    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      let fadeInTarget = document.querySelectorAll('.mask');
        window.addEventListener('scroll', () => {
      for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
          fadeInTarget[i].classList.add('is_show');
        }
      }
    });

      // //マウスストーカー用のdivを取得
      // const stalker = document.getElementById('stalker');
      //
      // //aタグにホバー中かどうかの判別フラグ
      // let hovFlag = false;
      //
      // //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
      // document.addEventListener('mousemove', function (e) {
      //     if (!hovFlag) {
      //     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      //     }
      // });
      //
      // //リンクへ吸い付く処理
      // const linkElem = document.querySelectorAll('a:not(.no_stick_)');
      // for (let i = 0; i < linkElem.length; i++) {
      //     //マウスホバー時
      //     linkElem[i].addEventListener('mouseover', function (e) {
      //         hovFlag = true;
      //
      //         //マウスストーカーにクラスをつける
      //         stalker.classList.add('hov_');
      //
      //         //マウスストーカーの位置をリンクの中心に固定
      //         let rect = e.target.getBoundingClientRect();
      //         let posX = rect.left + (rect.width / 2);
      //         let posY = rect.top + (rect.height / 2);
      //
      //         stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
      //
      //     });
      //     //マウスホバー解除時
      //     linkElem[i].addEventListener('mouseout', function (e) {
      //         hovFlag = false;
      //         stalker.classList.remove('hov_');
      //     });
      // }
      return
    }, []);

  return (
    <>
    <Swrapper>
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/bze5nui.css" />
      </Head>
      <Border />
      <Header />
      <div ref={scrollRef} className="scwp">
      { children }
      <Footer />
      </div>
      </Swrapper>
    </>
  );
};




const Swrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .scwp {
    min-height: 100vh;
    overflow: hidden;
    margin-top: -80px;
    @media screen and (max-width: 768px) {
      margin-top: -25px;
    }
    @media screen and (max-width: 599px) {
      margin-top: 0;
    }
  }
  #stalker {
      pointer-events: none;
      position: fixed;
      top: -8px;     //座標調節（カーソル位置と円の中心を合わせる）
      left: -8px;    //座標調節（カーソル位置と円の中心を合わせる）
      width: 25px;   //マウスストーカーの直径
      height: 25px;  //マウスストーカーの直径
      background: rgba(154,116,58,.7);
      border-radius: 50%;
      transition: transform 0.01s, top, 0.01s, left 0.01s, width .5s, height .5s, background-color .5s;
      transition-timing-function: ease-out;
      z-index: 999;
      &.hov_{
        top: -32px;     //大きさに合わせて座標調節
        left: -32px;    //大きさに合わせて座標調節
        width: 64px;
        height: 64px;
        transition: .5s;
        background: rgb(230 204 168 / 50%);
      }
  }
`
