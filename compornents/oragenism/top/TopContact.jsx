import styled from "styled-components";
import Con1 from "../../../image/top/con1.png";
import { ATxtbtn } from "../../atoms/btn/ATxtbtn";

export const TopContact = ()=> {
  return (
      <Sinner data-scroll-section>
        <Sscimg>
        <img src={Con1.src} alt="CONTACT" />
        </Sscimg>
        <Ssctxt>
        <h2>CONTACT</h2>
        <p>
          仕事のご依頼はもちろん、必ずしも依頼につながらないかもしれないが
          伝えたいことを「伝わる」かたちにするためのブレストからスタートしたい、
          というお問合せも大歓迎です。<br />
          既存のお取引先の方、その他弊社へのご意見・ご要望などもこちらからどうぞ。<br />
          2日以内に返信（土日祝日除く）
        </p>
        <ATxtbtn btntxt="MORE" url="mailto:reception@yk-kikaku.jp" />
        </Ssctxt>
      </Sinner>
  );
}


const Sinner = styled.section`
  font-family: futura-pt, sans-serif;
  width: 100%;
  max-width: 1280px;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
  width: 90%;
  }
  @media screen and (max-width: 599px) {
  flex-wrap: wrap;
  margin: 55px auto;
  }
`
const Sscimg = styled.div`
  width: 50%;
  position:relative;
  @media screen and (max-width: 799px) {
  width: 45%;
  }
  @media screen and (max-width: 599px) {
    width: 60%;
    margin: 0 auto;
  }
`

const Ssctxt = styled.div`
  width: 45%;
  position:relative;
  @media screen and (max-width: 799px) {
  width: 50%;
  }
  @media screen and (max-width: 599px) {
  width: 100%;
  margin-top: 35px;
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
    text-align: center;
    margin-bottom: 20px;
    }
  }
  h3 {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
  }
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 599px) {
    font-size: .9em;
    margin-bottom: 20px;
    }
  }
`
