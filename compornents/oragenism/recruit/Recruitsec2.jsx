import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec2 from "../../../image/recruit/sec2.png";
import RSec2B from "../../../image/recruit/sec2_back.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec2 = ()=> {
  return (
      <Swp id="section2" className={'section' + ' ' + 'section2'}>
        <Stxtwp>
        <h2>
        誰もが主役になれる
        <img src={RSec2.src} alt="働き方無限" />
        </h2>
        <h3>
        <span>募集資格</span>
        Qualification requirements
        </h3>
        <dl>
          <div>
          <dt>学歴？</dt>
          <dd>必要ありません</dd>
          </div>
          <div>
          <dt>経験？</dt>
          <dd>必要ありません</dd>
          </div>
          <div>
          <dt>資格？</dt>
          <dd>必要ありません</dd>
          </div>
          <div>
          <dt>年齢？</dt>
          <dd>関係ありません</dd>
          </div>
        </dl>
        </Stxtwp>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`
const Stxtwp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 1280px;
  color: #fff;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 1279px) {
  width: 90%;
  }
  h2 {
    position: relative;
    margin-bottom: 45px;
    font-size: 55px;
    font-weight: 900;
    line-height: 1;
    text-align: right;
    @media screen and (max-width: 1279px) {
    margin-bottom: 95px;
    }
    @media screen and (max-width: 768px) {
      font-size: 45px;
    }
    @media screen and (max-width: 599px) {
      font-size: 30px;
    }
    img {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
  h3 {
    margin-bottom: 65px;
    font-size: 30px;
    font-weight: 900;
    line-height: 1;
    @media screen and (max-width: 599px) {
      font-size: 16px;
    }
    span {
      font-size: 70px;
      display: block;
      @media screen and (max-width: 768px) {
        font-size: 50px;
      }
      @media screen and (max-width: 599px) {
        font-size: 30px;
      }
    }
  }
  dl {
    background: url(${RSec2B.src})no-repeat center center;
    background-size: cover;
    div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      dt {
        font-size: 20px;
        font-weight: 900;
        margin-right: 15px;
      }
      dd {
        position: relative;
        padding: 0 0 0 55px;
        font-size: 30px;
        font-weight: 900;
        @media screen and (max-width: 599px) {
          font-size: 20px;
        }
        &::before {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          background: #fff;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }

`
