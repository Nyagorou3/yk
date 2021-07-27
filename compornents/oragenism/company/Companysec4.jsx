import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import CSec2 from "../../../image/company/sec2.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Companysec4 = ()=> {
  return (
      <Sinner>
        <Ssctxt>
        <Sttl>
        <h2>INFORMATION</h2>
        <h3>
          会社情報
        </h3>
        </Sttl>
          <dl>
          <div>
            <dt>社名</dt>
            <dd>
            株式会社 YK企画
            </dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>
              京都府京都市中京区御池通東洞院東入笹屋町436<br />
              永和御池ビル606号
            </dd>
          </div>
          <div>
            <dt>TEL / FAX</dt>
            <dd>
              075-600-2460<br />
              075-600-2678
            </dd>
          </div>
          <div>
            <dt>Mail</dt>
            <dd>
            reception@yk-kikaku.jp
            </dd>
          </div>
          <div>
            <dt>
            事業内容</dt>
            <dd>
            建築物各種法定検査<br />
            ホームインスペクション<br />
            電気工事<br />
            環境・公害コンサルタント<br />
            給排水設備工事<br />
            WEB制作関連事業
            </dd>
          </div>
          <div>
            <dt>
            設立</dt>
            <dd>
            2020年9月
            </dd>
          </div>
          </dl>
        </Ssctxt>
      </Sinner>
  );
}


const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 75%;
    margin: 100px auto 60px;
  }
  @media screen and (max-width: 768px) {
    margin: 20px auto 40px;
  }
  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
    margin: 55px auto 25px;
  }
`

const Sttl = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
`

const Ssctxt = styled.div`
  width: 100%;
  position:relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 599px) {
    margin-top: 0;
  }
  h2 {
    writing-mode: vertical-rl;
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
    writing-mode: vertical-rl;
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
  dl {
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    @media screen and (max-width: 599px) {
      margin-top: 25px;
    }
    div {
      display: flex;
      width: 45%;
      margin-bottom: 45px;
      @media screen and (max-width: 599px) {
        flex-wrap:wrap;
        width: 100%;
      }
    }
    dt {
      width: 35%;
      padding-right: 20px;
      font-weight: 600;
      font-size: 15px;
    }
    dd {
      width: 60%;
      font-size: 15px;
    }
  }
`
