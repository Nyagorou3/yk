import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import RSec1 from "../../../image/recruit/sec1.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Recruitsec7 = ()=> {
  return (
      <Swp id="section5" className={'section5'}>
        <Stxtwp>
        <h2>
        JOB DESCRIPTION
        </h2>
        <dl>
        <Sdwp>
        <div>
          <dt>勤務場所</dt>
          <dd>宇治支店(京都府宇治市伊勢田町)</dd>
        </div>
        <div>
          <dt>勤務時間</dt>
          <dd>8:30~17:30<br />(業務状況により、残業または一時的な定時変更の可能性あり)</dd>
        </div>
        <div>
          <dt>月給</dt>
          <dd>220,000円~(応相談、経験や資格で優遇)<br />責任·役職手当別途支給<br />交通費実費支給</dd>
        </div>
        <div>
          <dt>賞与</dt>
          <dd>年1回(期末賞与　3月)　業績及び行動評価により決定</dd>
        </div>
        <div>
          <dt>昇給</dt>
          <dd>昇給審査年1回(3月審査 4月より反映)</dd>
        </div>
        <div>
          <dt>休日</dt>
          <dd>土日祝、有給休暇(法令に則り支給)、年末年始(12/29~1/4)、春休み(3/21~3/25)、誕生日or記念日休暇<br />
              こどもの看護休暇、介護休暇、※年間休日128日</dd>
        </div>
        <div>
          <dt>加入保険</dt>
          <dd>健康保険、厚生年金、雇用保険、労災保険、その他</dd>
        </div>
        <div>
          <dt>福利厚生</dt>
          <dd>健康診断、インフルエンザ予防接種<br />作業着、作業靴支給</dd>
        </div>
        <div>
          <dt>定年</dt>
          <dd>定めなし　希望に応じます。</dd>
        </div>
        <div>
          <dt>退職金制度</dt>
          <dd>あり(勤続5年以上対象)</dd>
        </div>
        <div>
          <dt>学歴</dt>
          <dd>不問</dd>
        </div>
        <div>
          <dt>実務経験·資格</dt>
          <dd>不問(お持ちの方勿論大歓迎！)<br />WEB部門については実務経験3年以上</dd>
        </div>
        <div>
          <dt>年齢</dt>
          <dd>不問(16歳から)</dd>
        </div>
        </Sdwp>
        </dl>
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
  width: 100%;
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
    text-align: center;
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
    padding: 45px 0;
    width: 100%;
    overflow-x: scroll;
    @media screen and (max-width: 599px) {
      margin-top: 30px;
    }
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
const Sdwp = styled.div`
display: flex;
flex-wrap: wrap;
width: 1800px;
div {
  width: 600px;
  display: flex;
  margin-bottom: 35px;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  dt {
    font-size: 14px;
    background: #fff;
    font-weight: 600;
    width: 20%;
    padding: 8px 10px;
    text-align: center;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7798dd+0,bf83db+100 */
    background: rgb(119,152,221); /* Old browsers */
    background: -moz-linear-gradient(left,  rgba(119,152,221,1) 0%, rgba(191,131,219,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(119,152,221,1) 0%,rgba(191,131,219,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(119,152,221,1) 0%,rgba(191,131,219,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7798dd', endColorstr='#bf83db',GradientType=1 ); /* IE6-9 */
    @media screen and (max-width: 599px) {
      font-size: 13px;
      padding: 8px 5px;
    }
  }
  dd {
    font-size: 14px;
    width: 70%;
    padding: 0 20px;
    @media screen and (max-width: 599px) {
      font-size: 13px;
    }
  }
}
`
