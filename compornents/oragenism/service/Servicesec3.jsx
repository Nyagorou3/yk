import styled from "styled-components";
import Sec1main from "../../../image/service/sec1.png";
import S1 from "../../../image/service/s1.png";
import S2 from "../../../image/service/s2.png";
import S3 from "../../../image/service/s3.png";
import S4 from "../../../image/service/s4.png";
import S5 from "../../../image/service/s5.png";
import S6 from "../../../image/service/s6.png";

import Crean from "../../../image/common/crean.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec3 = ()=> {
  return (
    <Sinner>
    <Sul>
    <li id="s1">
    <div className="img_wp">
    <span className="num">
    01
    </span>
    <img src={S1.src} alt="建築物各種法定検査" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Various legal inspections of buildings</span>
    建築物各種法定検査
    </h3>
    <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </div>
    </li>
    <li id="s2">
    <div className="img_wp">
    <span className="num">
    02
    </span>
    <img src={S2.src} alt="ホームインスペクション" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Home inspection</span>
    ホームインスペクション
    </h3>
    <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </div>
    </li>
    <li id="s3">
    <div className="img_wp">
    <span className="num">
    03
    </span>
    <img src={S3.src} alt="電気工事" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Electrical construction</span>
    電気工事
    </h3>
    <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </div>
    </li>
    <li id="s4">
    <div className="img_wp">
    <span className="num">
    04
    </span>
    <img src={S4.src} alt="環境・公害コンサルタント" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Environmental and pollution consultants</span>
    環境・公害コンサルタント
    </h3>
    <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </div>
    </li>
    <li id="s5">
    <div className="img_wp">
    <span className="num">
    05
    </span>
    <img src={S5.src} alt="給排水設備工事" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>Water supply and drainage equipment construction</span>
    給排水設備工事
    </h3>
    <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </div>
    </li>
    <li id="s6">
    <div className="img_wp">
    <span className="num">
    06
    </span>
    <img src={S6.src} alt="WEB制作関連事業" />
    </div>
    <div className="txt_wp">
    <h3>
    <span>WEB production related business</span>
    WEB制作関連事業
    </h3>
    <p>WEB制作をディレクションから実装までワンストップに行っています。</p>
    </div>
    </li>
    </Sul>
    </Sinner>
  );
}

const Sinner = styled.section`
font-family: futura-pt, sans-serif;
width: 100%;
max-width: 1280px;
margin: 200px auto;
text-align: left;
color: #000;
@media screen and (max-width: 1279px) {
  width: 90%;
}
@media screen and (max-width: 768px) {
  margin: 150px auto;
}
@media screen and (max-width: 599px) {
  flex-wrap: wrap;
  margin: 55px auto;
}
`

const Sul = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    margin-bottom: 85px;
    @media screen and (max-width: 768px) {
    align-items: flex-start;
    }
    @media screen and (max-width: 599px) {
      margin-bottom: 25px;
    }
    .img_wp {
      width: 45%;
      @media screen and (max-width: 599px) {
        width: 100%;
      }
      .num {
        font-size: 24px;
      }
    }
    .txt_wp {
      width: 45%;
      @media screen and (max-width: 768px) {
        margin-top: 45px;
      }
      @media screen and (max-width: 599px) {
        width: 100%;
      }
      h3 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 45px;
        font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
        @media screen and (max-width: 768px) {
          font-size: 20px;
          margin-bottom: 20px;
        }
         span {
          font-size: 22px;
          display: block;
          font-family: futura-pt, sans-serif;
          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }
      }
      p {
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 1.6;
        font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
        @media screen and (max-width: 599px) {
          font-size: 14px;
        }
      }
    }
  }

`
