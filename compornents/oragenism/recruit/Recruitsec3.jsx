import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec3 from "../../../image/recruit/sec3.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec3 = ()=> {
  return (
      <Swp id="section3" className={'section' + ' ' + 'section3'}>
        <Stxtwp>
        <h2>NECESSARY</h2>
        <ul>
        <li>柔軟な発想</li>
        <li>冷静な思考</li>
        <li>熱い情熱</li>
        </ul>
        <p>いずれかひとつでも持っている方</p>
        </Stxtwp>
        <Simgwp>
          <img src={RSec3.src} alt="NECESSARY" />
        </Simgwp>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
`
const Stxtwp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 60px;
    line-height: 1;
    letter-spacing: 3px;
    font-family: futura-pt, sans-serif;
  }
  ul {
    li {
      width: 50%;
      background: #fff;
      color: #000;
      margin: 0 auto 30px;
      font-weight: 900;
      font-size: 40px;
      @media screen and (max-width: 599px) {
        font-size: 25px;
      }
    }
  }
  p {
    font-size: 45px;
    margin: 0;
    font-weight: 900;
    letter-spacing: 2px;
    margin-top: 45px;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
    @media screen and (max-width: 599px) {
      font-size: 35px;
      line-height: 1.6;
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
@media screen and (max-width: 599px) {
  min-width: 80%;
}
`
