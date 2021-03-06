import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import ASec3 from "../../../image/about/sec3.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Aboutsec3 = ()=> {
  return (
      <Swp>
      <Sinner>
        <Sscimg className="mask">
        <div className="line">
        <div className="line2">
        <div className="linewp">
        <img data-scroll="" data-scroll-speed="-2" src={ASec3.src} alt="PHILOSOPHY" />
        </div>
        </div>
        </div>
        </Sscimg>
        <Ssctxt className="mask">
        <Sttl>
        <h2>PHILOSOPHY</h2>
        <h3>
          継続することで、<br />
          誰もが憧れる会社であること。
        </h3>
        </Sttl>
        <ul>
          <li>
            <h4>1.SINCERITY</h4>
            <p>常に誠実であること。</p>
          </li>
          <li>
            <h4>2.FUTURE</h4>
            <p>顧客の最上の未来を共に見て、共に歩むこと。</p>
          </li>
          <li>
            <h4>3.THE FOREFRONT</h4>
            <p>自社の技術に常に最先端を求めること。</p>
          </li>
          <li>
            <h4>4.IMAGINATION</h4>
            <p>社員全員が今を楽しみ、未来を創造できる環境とすること。</p>
          </li>
        </ul>
        </Ssctxt>
      </Sinner>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 295px;
    height: 110px;
    right: 7%;
    bottom: -130px;
    background: url(${Mou.src}) no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px) {
      width: 225px;
    }
    @media screen and (max-width: 599px) {
      width: 130px;
      height: 90px;
      bottom: -85px;
    }
  }
`
const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 90%;
  margin: 200px auto 160px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
  margin: 20px auto 150px;
  }
  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
    margin: 55px auto;
  }
`
const Sscimg = styled.div`
  width: 35%;
  min-width: 450px;
  position:relative;
  margin-top: -65px;
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
  @media screen and (max-width: 1279px) {
    min-width: 350px;
    margin-top: -195px;
  }
  @media screen and (max-width: 768px) {
    min-width: 250px;
    margin-left: -10%;
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
    @media screen and (max-width: 599px) {
      width: 375%;
      max-width: 500%;
    }
  }
  @media screen and (max-width: 599px) {
    width: 95px;
    overflow: hidden;
    min-width: auto;
    margin: -20% 0 0 -10%;
  }
`

const Sttl = styled.div`

`

const Ssctxt = styled.div`
  width: 50%;
  position:relative;
  opacity: 0;
  &.is_show {
    opacity: 1;
    transition: 1.5s .8s opacity;
  }
  @media screen and (max-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 599px) {
    width: 70%;
    margin-top: 0;
  }
  h2 {
    font-size: 16px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    @media screen and (max-width: 1279px) {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 599px) {

    }
  }
  h3 {
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
  ul {
    li  {
      margin-bottom: 45px;
      @media screen and (max-width: 1279px) {
        margin-bottom: 30px;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      h4 {
        font-family: futura-pt, sans-serif;
        font-size: 30px;
        font-weight: 500;
        @media screen and (max-width: 1279px) {
          font-size: 20px;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 599px) {
          font-size: 16px;
        }
      }
      p {
        font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
        margin: 0;
        @media screen and (max-width: 599px) {
          font-size: 13px;
        }
      }
    }
  }
`
