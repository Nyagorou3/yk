import styled from "styled-components";
import Sec4main from "../../../image/top/sec4main.png";
import Sec4sub1 from "../../../image/top/sec4sub1.png";
import Sec4sub2 from "../../../image/top/sec4sub2.png";
import Kazari1 from "../../../image/common/kazari1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";
import { TxtbtnlW } from "../../atoms/btn/TxtbtnlW";

export const TopRecruit = ()=> {
  return (
      <Srwap>
      <Sinner>
        <Ssctxt className="mask">
        <div>
        <h2>RECRUIT</h2>
        <h3>型にとらわれない
        <br />生き方を</h3>
        <p>
        YK企画では学歴や経歴は関係ありません。<br />
        自由な発想を持った誠実な人材を募集しています。<br />
        あなたも新しいことを一緒にYKで始めてみませんか？
        </p>
        <TxtbtnlW to="/recruit" btntxt="MORE" />
        </div>
        </Ssctxt>
        <Sscimg className="mask">
        <img src={Sec4main.src} alt="RECRUIT" />
        </Sscimg>
      </Sinner>
      </Srwap>
  );
}


const Srwap = styled.div`
position:relative;
&::before  {
  content: '';
  position: absolute;
  width: 60%;
  height: 120%;
  left: 0;
  top: -10%;
  background: #000;
  z-index: 0;
  @media screen and (max-width: 599px) {
  width: 100%;
  top: -5%;
  height: 90%;
  }
}
`
const Sinner = styled.section`
  font-family: futura-pt, sans-serif;
  position:relative;
  width: 80%;
  margin: 250px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 599px) {
  flex-wrap: wrap;
  width: 85%;
  margin: 190px auto 55px;
  }
  &::before  {
    content: '';
    position: absolute;
    height: 100px;
    right: -5%;
    top: -155px;
    width: 350px;
    height: 385px;
    background: url(${Kazari1.src}) no-repeat;
    @media screen and (max-width: 1279px) {
      right: -16%;
      top: -240px;
    }
    @media screen and (max-width: 799px) {
        background-size: contain;
        width: 190px;
        right: -10%;
    }
    @media screen and (max-width: 599px) {
      background-size: contain;
      width: 120px;
      right: 0;
      top: -200px;
    }
  }
`
const Sscimg = styled.div`
  width: 45%;
  position:relative;
  @media screen and (max-width: 599px) {
    width: 65%;
    margin: 100px auto 0;
  }
  &.is_show {
    &::before  {
      width: 100%;
      @media screen and (max-width: 799px) {
        width: 55%;
      }
    }
    &::after  {
      opacity: 1;
      transition: .8s 1s;
    }
  }
  &::before  {
    content: '';
    position: absolute;
    left: -170px;
    top: -135px;
    width: 0;
    height: 282px;
    transition: .8s;
    background: url(${Sec4sub2.src}) no-repeat;
    z-index: 1;
    @media screen and (max-width: 799px) {
      background-size: contain;
      width: 55%;
      top: -215px;
      left: -60px;
    }
    @media screen and (max-width: 599px) {
      top: -50px;
    }
  }
  &::after  {
    content: '';
    position: absolute;
    bottom: -110px;
    right: 0;
    bottom: -110px;
    width: 300px;
    height: 195px;
    opacity: 0;
    background: url(${Sec4sub1.src}) no-repeat;
    @media screen and (max-width: 799px) {
      background-size: contain;
      width: 55%;
      right: -70px;
      bottom: -170px;
    }
  }
`

const Ssctxt = styled.div`
  width: 45%;
  position:relative;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: .8s .5s;
  &.is_show {
    opacity: 1;
  }
  @media screen and (max-width: 599px) {
  width: 100%;
  }
  h2{
    font-size: 60px;
    letter-spacing: .1em;
    margin-bottom: 40px;
    font-weight: 600;
    @media screen and (max-width: 799px) {
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
      font-size: 20px;
    }
  }
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 599px) {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
`
