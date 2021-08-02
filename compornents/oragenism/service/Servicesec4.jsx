import styled from "styled-components";
import Crean from "../../../image/common/crean.png";
import ASec1 from "../../../image/about/sec1.png";
import ASecs1 from "../../../image/about/sec1_sub.png";
import { Txtbtn } from "../../atoms/btn/Txtbtn";

export const Servicesec4 = ()=> {
  return (
      <Swp  data-scroll-section>

      <SPro>
        <h3>FLOW (example)</h3>
        <Sscroll>
        <SproWp>
        <SProBox>
        <h4>(WEBor現地)</h4>
        <p>
          一次打ち合わせ
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          見積書提出
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <h4>(現地)</h4>
        <p>
          二次打ち合わせ
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          制作案提出
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <h4>(WEBor現地)</h4>
        <p>
          三次打ち合わせ
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          制作案決定
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          制作開始
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          大枠完成
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <h4>(WEBor現地)</h4>
        <p>
          四次打ち合わせ
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <h4>(WEBor現地)</h4>
        <p>
          完成
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <h4>(WEBor現地)</h4>
        <p>
          五次打ち合わせ及び検収
        </p>
        </SProBox>
        <Pointbtn />
        <SProBox>
        <p>
          納品及び公開、無償保守(半年間)
        </p>
        </SProBox>
        </SproWp>
        </Sscroll>
      </SPro>
      </Swp>
  );
}

const Swp = styled.section`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 77%;
    top: 32%;
    right: 0;
    background: rgba(228,221,202,.4);
    z-index: -1;
    @media screen and (max-width: 599px) {
      top: 8%;
      height: 100%;
    }
  }

`
const Sinner = styled.div`
  font-family: futura-pt, sans-serif;
  width: 90%;
  margin: 200px auto 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: #000;
  @media screen and (max-width: 1279px) {
    width: 90%;
    margin: 200px auto 30px 0;
  }
  @media screen and (max-width: 768px) {
  margin: 150px auto 0;
  flex-wrap: wrap;
  }
  @media screen and (max-width: 599px) {
    margin: 55px auto 0;
  }
`
const Sscimg = styled.div`
  width: 65%;
  position:relative;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 0 0 -10%;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
  }
  &::before  {
    content: '';
    position: absolute;
    width: 30%;
    height: 230px;
    right: 45%;
    top: -253px;
    background: url(${Crean.src}) no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px) {
      background-size: contain;
      height: 75px;
      right: -65px;
      top: -115px;
    }
    @media screen and (max-width: 599px) {
      height: 75px;
      right: 48%;
      top: -45px;
    }
  }
`

const Sttl = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
@media screen and (max-width: 599px) {
  width: 35%;
}
`

const Ssctxt = styled.div`
  width: 30%;
  position:relative;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 60px 0 0;
    width: 90%;
  }
  @media screen and (max-width: 599px) {
    width: 95%;
    margin-top: 40px;
  }
  h2{
    writing-mode: vertical-rl;
    font-size: 16px;
    letter-spacing: .1em;
    margin-left: 40px;
    font-weight: 600;
    @media screen and (max-width: 599px) {
      margin-left: 24px;
      font-size: 13px;
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
  p {
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    line-height: 2;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      width: 60%;
      margin: 0;
    }
    @media screen and (max-width: 599px) {
      font-size: 14px;
      margin-bottom: 32px;
    }
  }
`

const SPro = styled.div`
  width: 80%;
  margin: 50px 0 100px auto;
  color: #000;
  @media screen and (max-width: 1279px) {
    margin: 30px auto 60px;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 60px;
  }
  h3 {
    position: relative;
    font-family: futura-pt, sans-serif;
    font-size: 40px;
    margin-bottom: 40px;
    padding-left: 50px;
    @media screen and (max-width: 1279px) {
      font-size: 35px;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
    @media screen and (max-width: 599px) {
      margin-bottom: 15px;
      font-size: 21px;
    }
    &::before  {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background: #000;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
const Sscroll = styled.div`
  overflow-x: scroll;
  padding-bottom: 40px;
  &::-webkit-scrollbar {
    height: 5px;
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
  background: #000;
  }
  &::-webkit-scrollbar-track {
  background: rgba(100,100,100, .2);
  }
`

const SproWp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3500px;
  @media screen and (max-width: 768px) {
    width: 2500px;
  }
  div {
    &:last-of-type {
      background: #000;
      p {
        color: #fff;
      }
    }
  }

`
const SProBox = styled.div`
  position: relative;
  border: 2px solid;
  width: 130px;
  padding: 25px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1279px) {
    width: 85px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 15px;
  }
  h4 {
    position: absolute;
    right: -35px;
    writing-mode: vertical-rl;
    font-size: 14px;
    top: 5px;
    letter-spacing: 3px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      right: -27px;
      font-size: 12px;
    }
  }
  p {
    margin: 0;
    writing-mode: vertical-rl;
    letter-spacing: 1px;
    font-weight: 600;
    @media screen and (max-width: 1279px) {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
`

const Pointbtn = styled.span`
position: relative;
width: 70px;
height: 70px;
margin-top: 125px;
border-radius: 50%;
border: 2px solid #000;
background: transparent;
@media screen and (max-width: 1279px) {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 768px) {
  margin-top: 100px;
  width: 45px;
  height: 45px;
}
@media screen and (max-width: 599px) {
  width: 40px;
  height: 40px;
}
&::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 2px;
  background: #000;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1279px) {
    width: 20px;
  }
  @media screen and (max-width: 599px) {
    width: 13px;
  }
}
&::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 15px;
  height: 15px;
  right: 20px;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateY(-50%) rotate(-135deg);
  @media screen and (max-width: 1279px) {
    width: 10px;
    height: 10px;
    right: 13px;
  }
}
`
