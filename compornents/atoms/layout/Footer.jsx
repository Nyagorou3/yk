import Link from "next/link";
import styled from "styled-components";
import Logo from "../../../image/common/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
  return (
    <Sfooter>
    <Sfcon>
    <Sfleft>
    <img src={Logo.src} alt="YK企画" />
    <p>YK CO.LTD</p>
      <address>
      京都府京都市中京区御池通東洞院東入笹屋町436<br />
      永和御池ビル606号<br />
      Eiwa Oike Building No. 606, Oike-dori Higashinotoin-higashiiru, Nakagyo-ku, Kyoto, Kyoto, Japan
      <br /><br />
      Tel. 075 600 2460 / Fax. 075 600 267
      </address>
    </Sfleft>
    <Sright>
    <Sful>
      <Sfli><Link href="/" passHref><Slink>HOME</Slink></Link></Sfli>
      <Sfli><Link href="/about" passHref><Slink>ABOUT</Slink></Link></Sfli>
      <Sfli><Link href="/service" passHref><Slink>SERVICE</Slink></Link></Sfli>
      <Sfli><Link href="/company" passHref><Slink>COMPANY</Slink></Link></Sfli>
      <Sfli><Link href="/blog" passHref><Slink>BLOG</Slink></Link></Sfli>
      <Sfli><Link href="/links" passHref><Slink>LINKS</Slink></Link></Sfli>
      </Sful>
      <Sfsns>
        <li><span><a href="/links"><FontAwesomeIcon icon={faInstagram}/></a></span></li>
        <li><span><a href="/links"><FontAwesomeIcon icon={faEnvelope}/></a></span></li>
      </Sfsns>
      </Sright>
      </Sfcon>
    </Sfooter>
  );
};

const Sfooter = styled.footer`
  font-family: futura-pt, sans-serif;
  background: #dfdede;
  border-top: 1px solid #756449;
  text-align: center;
  width: 100%;
  color: #9a743a;
  padding: 70px 0;
  @media screen and (max-width: 599px) {
    padding: 45px 0;
  }
`;

const Sfcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    width: 90%;
  }
  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
  }
`
const Sfleft = styled.div`
    text-align: left;
    address {
      font-size: 14px;
    }
    @media screen and (max-width: 1279px) {
      width: 45%;
    }
    @media screen and (max-width: 599px) {
      width: 90%;
      margin: 0 auto 35px;
      border-bottom: 1px solid;
      padding-bottom: 35px;
    }
    img {
          width: 60px;
    }
`

const Sright = styled.div`
    text-align: left;
    @media screen and (max-width: 1279px) {
      width: 45%;
    }
    @media screen and (max-width: 599px) {
      width: 100%;
    }
`

const Sful = styled.ul`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
padding: 0;
`
const Sfli = styled.li`
  width: 30%;
  font-weight: 400;
  margin-right: 2%;
  margin-bottom: 15px;
  letter-spacing: .1em;
  a {
    font-size: 15px;
    color: #908369;
  }
`
const Sfsns = styled.ul`
    text-align: left;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 15px;
    }
`
const Slink = styled.a`
  margin: 0 8px;
  font-size: 16px;
`;
