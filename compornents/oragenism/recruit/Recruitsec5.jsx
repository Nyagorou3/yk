import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec1 from "../../../image/recruit/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec5 = ()=> {
  return (
      <Swp id="section5" className={'section5'}>
        <Stxtwp>
        <h2>
        RECRUITMENT TYPE
        </h2>
        <h3>職務内容</h3>
        <p>1　総合職(営業、企画、事務)</p>
        <p>2　建築物点検</p>
        <p>3　各種工事(電気、通信、給排水、消防設備等)</p>
        <p>4　WEB制作、各種デザイン<br />
        <span>※それぞれ多少の事務作業や取引先との打ち合わせが発生することがあります。<br />
              (打ち合わせは営業が同行します。)
        </span>
        </p>
        </Stxtwp>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
  background: linear-gradient(0deg,#43e2c6,#3183d0);
  border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
  background: rgba(100,100,100, .5);
  }
`
const Stxtwp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 65%;
  height: auto;
  max-width: 1280px;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 200px 0;
  text-align: left;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  h2 {
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 45px;
    line-height: 1;
    font-family: futura-pt, sans-serif;
    text-align: left;
    @media screen and (max-width: 599px) {
      font-size: 30px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #fff;
  }
  p {
    @media screen and (max-width: 599px) {
      font-size: 15px;
    }
    span {
      font-size: 14px;
    }
  }
  dl {
    margin-top: 65px;
    text-align: left;
    border-top: 1px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 45px 0;
    div {
      display: flex;
      margin-bottom: 35px;
      justify-content: space-between;
      border-bottom: 1px solid #3a3a3a;
      padding-bottom: 10px;
      dt {
        font-size: 14px;
        font-weight: 600;
        width: 20%;
        padding-left: 25px;
      }
      dd {
        font-size: 14px;
        width: 70%;
      }
    }
  }
`
