import styled from "styled-components";
import Kazari1 from "../../../image/common/kazari1.png";
import Seckazari from "../../../image/common/seckazari.png";
import Item1 from "../../../image/service/item1.png";
import Item2 from "../../../image/service/item2.png";
import Item3 from "../../../image/service/item3.png";
import Item4 from "../../../image/service/item4.png";
import Item5 from "../../../image/service/item5.png";
import Item6 from "../../../image/service/item6.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";
import { Txtbtnc } from "../../atoms/btn/Txtbtnc";
import Link from "next/link";


export const TopService = ()=> {
  return (
      <Sinner data-scroll-section>
        <h2>
        <img className="kazari" src={Seckazari.src} alt="SERVICE" />
        SERVICE
        </h2>
        <Sslist>
          <li data-scroll>
            <Link href="/service#s1">
            <a>
            <span className="num">
            01
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item1.src} alt="建築物各種法定検査" />
            </div>
            <h3>
            <span>Various legal inspections of buildings</span>
            建築物各種法定検査
            </h3>
            </a>
            </Link>
          </li>
          <li data-scroll>
            <Link href="/service#s2">
            <a>
            <span className="num">
            02
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item2.src} alt="ホームインスペクション" />
            </div>
            <h3>
            <span>Home inspection</span>
            ホームインスペクション
            </h3>
            </a>
            </Link>
          </li>
          <li data-scroll>
            <Link href="/service#s3">
            <a>
            <span className="num">
            03
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item3.src} alt="電気工事" />
            </div>
            <h3>
            <span>Electrical construction</span>
            電気工事
            </h3>
            </a>
            </Link>
          </li>
          <li data-scroll>
            <Link href="/service#s4">
            <a>
            <span className="num">
            04
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item4.src} alt="環境・公害コンサルタント" />
            </div>
            <h3>
            <span>Environmental and pollution consultants</span>
            環境・公害コンサルタント
            </h3>
            </a>
            </Link>
          </li>
          <li data-scroll>
            <Link href="/service#s5">
            <a>
            <span className="num">
            05
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item5.src} alt="給排水設備工事" />
            </div>
            <h3>
            <span>Water supply and drainage equipment construction</span>
            給排水設備工事
            </h3>
            </a>
            </Link>
          </li>
          <li data-scroll>
            <Link href="/service#s6">
            <a>
            <span className="num">
            06
            </span>
            <div className="img_wp">
            <img  data-scroll="" data-scroll-speed="-1" src={Item6.src} alt="WEB制作関連事業" />
            </div>
            <h3>
            <span>WEB production related business</span>
            WEB制作関連事業
            </h3>
            </a>
            </Link>
          </li>
        </Sslist>
        <Txtbtnc to="/service" btntxt="MORE" />
      </Sinner>
  );
}


const Sinner = styled.section`
  position:relative;
  font-family: futura-pt, sans-serif;
  width: 80%;
  margin: 200px auto;
  color: #000;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 150px auto;
  }
  @media screen and (max-width: 768px) {
    margin: 55px auto;
  }
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 387px;
    left: -5%;
    top: 5%;
    background: url(${Kazari1.src}) no-repeat;
    background-size: contain;
    z-index: -1;
    @media screen and (max-width: 768px) {
      width: 160px;
      height: 300px;
      left: -5%;
      top: 18%;
    }
    @media screen and (max-width: 599px) {
      width: 80px;
      height: 300px;
      left: -5%;
      top: 15%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 197px;
    right: -5%;
    bottom: -10%;
    background: url(${Mou.src}) no-repeat;
    background-size: contain;
    z-index: -1;
    @media screen and (max-width: 768px) {
      width: 265px;
      height: 197px;
      right: -1%;
      bottom: -20%;
    }
    @media screen and (max-width: 599px) {
      width: 215px;
      bottom: -25%;
    }
  }
  h2{
    padding-top: 150px;
    position:relative;
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      padding-top: 120px;
    }
    @media screen and (max-width: 599px) {
      padding-top: 77px;
      font-size: 36px;
    }
    .kazari {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 768px) {
        width: 50%;
      }
      @media screen and (max-width: 599px) {
        width: 75%;
      }
    }
  }
`
const Sslist = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 599px) {
    margin-bottom: 25px;
  }
  li {
    width: 29%;
    text-align: left;
    opacity: 0;
    transition: .8s 1s;
    @media screen and (max-width: 768px) {
      width: 30%;
    }
    @media screen and (max-width: 599px) {
      width: 46%;
    }
    &.is_show {
      opacity: 1;
      .img_wp {
        transform: scale(1);
        &::before {
          height: 0;
        }
      }
    }
    .img_wp {
      position:relative;
      overflow: hidden;
      transform: scale(.5);
      transition: .8s 1.5s;
      img {
        width: 130%;
        max-width: 130%;
        filter: grayscale(100%);
        display: inline-block;
        transform: scale(1.2);
      }
    }
    a {
      &:hover {
        opacity: 1;
        img {
        filter: grayscale(0);
        transition: .5s;
        }
      }
    }
    .num {
      font-size: 2em;
      @media screen and (max-width: 768px) {
        font-size: 1.5em;
      }
      @media screen and (max-width: 599px) {
        font-size: 1.2em;
      }
    }
    h3 {
      font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
      font-size: 1.3em;
      font-weight: 600;
      letter-spacing: .1em;
      margin-top: 15px;
      line-height: 1.6;
      @media screen and (max-width: 768px) {
        font-size: .9em;
      }
      @media screen and (max-width: 599px) {
        font-size: .8em;
        margin-top: 8px;
      }
      span {
        font-family: futura-pt,sans-serif;
        display: block;
        font-size: .7em;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }
    &:nth-of-type(1) {
      margin-top: 210px;
      @media screen and (max-width: 768px) {
        margin-top: 155px;
      }
      @media screen and (max-width: 599px) {
        margin-top: 50px;
      }
    }
    &:nth-of-type(2) {
      margin-top: 150px;
      @media screen and (max-width: 768px) {
        margin-top: 80px;
      }
      @media screen and (max-width: 599px) {
        margin-top: 0;
      }
    }
    &:nth-of-type(3) {
      @media screen and (max-width: 599px) {
        margin-top: 25px;
      }
    }
    &:nth-of-type(4) {
      margin-top: 90px;
      @media screen and (max-width: 768px) {
        margin-top: 50px;
      }
      @media screen and (max-width: 599px) {
        margin-top: -30px;
      }
    }
    &:nth-of-type(5) {
      @media screen and (max-width: 768px) {
        margin-top: -45px;
      }
      @media screen and (max-width: 599px) {
        margin-top: 30px;
      }
    }
    &:nth-of-type(6) {
      margin-top: -105px;
      @media screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
`
