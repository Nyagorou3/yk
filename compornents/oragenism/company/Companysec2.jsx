import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import CSec2 from "../../../image/company/sec2.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import Mou from "../../../image/common/mou.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Companysec2 = ()=> {
  return (
      <Sinner  data-scroll-section>
        <Ssctxt data-scroll>
        <Sttl>
        <h2>QUALIFICATION</h2>
        <h3>
          保有資格
        </h3>
        </Sttl>
          <dl>
          <div>
            <dt>建築関係</dt>
            <dd>
            一級建築士<br />
            特定建築物調査員<br />
            建築設備検査員<br />
            防火設備検査員<br />
            赤外線建物診断技能師<br />
            建築物環境衛生管理技術者<br />
            福祉住環境コーディネーター
            </dd>
          </div>
          <div>
            <dt>電気,
              消防,
              通信設備</dt>
            <dd>
              電気工事士<br />
              消防設備士<br />
              消防設備点検資格者<br />
              第三種冷凍機械責任者<br />
              第二種冷媒フロン類取扱技術者<br />
              冷媒回収技術者
            </dd>
          </div>
          <div>
            <dt>給排水設備</dt>
            <dd>
            公害防止管理者(水質)<br />
            下水道技術検定(三種)<br />
            浄化槽設備士<br />
            給水装置工事主任技術者<br />
            毒物劇物取扱者
            </dd>
          </div>
          <div>
            <dt>
            その他,各種技能講習</dt>
            <dd>
            高所作業車<br />
            小型移動式クレーン<br />
            第二級陸上無線技士<br />
            各種特別教育（フルハーネス・足場組立etc...）
            </dd>
          </div>
          </dl>
        </Ssctxt>
        <Sscimg data-scroll>
        <div>
        <img data-scroll data-scroll-speed="1" src={CSec2.src} alt="QUALIFICATION" />
        </div>
        </Sscimg>
      </Sinner>
  );
}


const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 90%;
  margin: 200px 0 160px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
    margin: 80px 0 105px auto;
  }
  @media screen and (max-width: 768px) {
  margin: 30px auto 150px;
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
  @media screen and (max-width: 1279px) {
    min-width: 350px;
    margin-top: -195px;
  }
  @media screen and (max-width: 768px) {
    min-width: 250px;
    margin-right: -6%;
  }
  &.is_show {
    opacity: 1;
    div {
      &::before {
        left: 105%;
      }
    }
  }
  div {
    position:relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(228,221,202,1.0);
      z-index: 1;
      transition: .9s left;
    }
  }
  img {
    width: 120%;
    max-width: 120%;
    @media screen and (max-width: 599px) {
      width: 700%;
      max-width: 700%;
      position: relative;
      left: -200%;
    }
  }
  @media screen and (max-width: 599px) {
    width: 95px;
    overflow: hidden;
    min-width: auto;
    margin: -20% -6% 0 0;
  }
`

const Sttl = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
`

const Ssctxt = styled.div`
  width: 55%;
  padding: 0 0 0 25px;
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
      width: 47%;
      margin-bottom: 45px;
      @media screen and (max-width: 1279px) {
        width: 100%;
      }
      @media screen and (max-width: 599px) {
        flex-wrap: wrap;
      }
    }
    dt {
      width: 40%;
      padding-right: 20px;
      font-weight: 600;
      font-size: 15px;
      @media screen and (max-width: 1279px) {
        width: 40%;
      }
      @media screen and (max-width: 599px) {
        width: 100%;
        margin-bottom: 5px;
      }
    }
    dd {
      width: 60%;
      font-size: 15px;
      @media screen and (max-width: 599px) {
        width: 100%;
        font-size: 13px;
      }
    }
  }
`
