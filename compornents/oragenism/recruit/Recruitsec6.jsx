import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec1 from "../../../image/recruit/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";
import { ATxtbtnW } from "../../atoms/btn/ATxtbtnW";

export const Recruitsec6 = ()=> {
  return (
      <Swp id="section6" className={'section6'}>
        <Stxtwp>
        <h2>
        選考方法
        </h2>
        <p>書類選考の上、面接<br />
履歴書及び職務経歴書、自己PR(様式不問、何でも構いません。)の<br />PDFデータを以下までお送りください。<br />
※頂いた情報は法令に基づき適切に処理し、選考以外の目的で一切使用いたしません。</p>
<ATxtbtnW btntxt={"MORE"} url={"mailto:reception@yk-kikaku.jp"} />
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
  width: 100%;
  max-width: 1280px;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  h2 {
    font-size: 30px;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 45px;
  }
  p {
    font-size: 16px;
    margin: 0;
    font-weight: 900;
    letter-spacing: 3px;
    margin-bottom: 45px;
    @media screen and (max-width: 599px) {
      font-size: 13px;
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
