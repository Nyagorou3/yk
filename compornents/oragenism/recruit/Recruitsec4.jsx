import styled from "styled-components";
import RSec3 from "../../../image/recruit/sec3.png";
import RSec1 from "../../../image/recruit/sec1.png";
import RSec4_1 from "../../../image/recruit/sec4_1.png";
import RSec4_2 from "../../../image/recruit/sec4_2.png";
import RSec4_3 from "../../../image/recruit/sec4_3.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec4 = ()=> {
  return (
      <Swp id="section4" className={'section4'}>
        <Stxtwp>
        <h2>
        <span>YKの特色</span>
        FEATURES
        </h2>
        <Sulwp>
        <ul>
        <li>
          <img src={RSec4_1.src} alt="テレワーク推奨" />
          <h4>テレワーク推奨</h4>
          <p>
          PC等の機器支給、電気代、
             ネット代補助します。
          </p>
        </li>
        <li>
          <img src={RSec4_2.src} alt="NECESSARY" />
          <h4>アサインしやすい環境</h4>
          <p>若い会社なので、伸びしろが多く、
             幹部クラスになるのも決して夢ではありません。
          </p>
        </li>
        <li>
          <img src={RSec4_3.src} alt="NECESSARY" />
          <h4>特別休暇制度</h4>
          <p>春休み(3/21~3/25)、誕生日or記念日休暇
             こどもの看護休暇、介護休暇など
          </p>
        </li>
        </ul>
        </Sulwp>
        </Stxtwp>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
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
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  color: #fff;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 599px) {
    width: 90%;
  }
  h2 {
    text-align: left;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 60px;
    line-height: 1;
    letter-spacing: 3px;
    font-weight: 900;
    font-family: futura-pt, sans-serif;
    @media screen and (max-width: 599px) {
      font-size: 20px;
    }
    span {
      font-size: 70px;
      display: block;
      font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
      @media screen and (max-width: 599px) {
        font-size: 40px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 1280px;
    margin: 0 auto;
    @media screen and (max-width: 599px) {
      flex-wrap: wrap;
      width: 880px;
      align-items: normal;
      justify-content: flex-start;
    }
    li {
      position: relative;
      padding: 20px;
      width: 300px;
      border: 2px solid #fff;
      color: #fff;
      background: #000;
      margin: 0 auto 30px;
      font-weight: 900;
      font-size: 40px;
      z-index: 1;
      @media screen and (max-width: 768px) {
        width: 230px;
      }
      @media screen and (max-width: 599px) {
        width: 195px;
      }
      &:nth-of-type(1) {
        margin-top: 60px;
        @media screen and (max-width: 599px) {
          margin: 60px 60px 0 0;
        }
      }
      &:nth-of-type(2) {
        @media screen and (max-width: 599px) {
          margin: 60px 60px 0 0;
        }
      }
      &:nth-of-type(3) {
        margin-top: 490px;
        margin-left: -625px;
        @media screen and (max-width: 1279px) {
          margin-left: -445px;
        }
        @media screen and (max-width: 768px) {
          margin-left: -355px;
        }
        @media screen and (max-width: 599px) {
          margin: 60px 0 0 0;
        }
      }
      h4 {
        margin-top: 15px;
        font-size: 18px;
        font-weight: 900;
      }
      img {
        width: 100%;
      }
      p {
        font-size: 13px;
        margin: 0;
        font-weight: 900;
        letter-spacing: 2px;
        margin-top: 15px;
      }
      &::before {
        content: '';
        position: absolute;
        width: 85%;
        height: 55%;
        left: -75px;
        top: -40px;
        background: url(${RSec1.src}) no-repeat;
        background-size: contain;
        z-index: -1;
        @media screen and (max-width: 599px) {
          width: 65%;
          height: 55%;
          left: -50px;
          top: -20px;
        }
      }
    }
  }
`

const Simgwp = styled.div`
position: absolute;
top: 54%;
left: 50%;
min-width: 500px;
transform: translate(-50%, -50%);
z-index: -1;
`
const Sulwp = styled.div`
  @media screen and (max-width: 599px) {
    width: 90%;
    overflow-x: scroll;
    box-sizing: border-box;
    padding: 15px 50px 60px;
    &::-webkit-scrollbar {
      width: 0px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg,#43e2c6,#3183d0);
    border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
    background: rgba(100,100,100, .5);
    }
}
`
