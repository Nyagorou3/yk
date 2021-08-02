import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react"
import Link from "next/link";

export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
const menuFunction = () => {
  setOpenMenu(!openMenu);
  console.log(openMenu);
}
  return (
    <Sheader className="op2">
    <Sul>
      <Sli><Link href="/" passHref><Slink>TOP</Slink></Link></Sli>
      <Sli><Link href="/about" passHref><Slink>ABOUT</Slink></Link></Sli>
      <Sli><Link href="/service" passHref><Slink>SERVICE</Slink></Link></Sli>
      <Sli><Link href="/company" passHref><Slink>COMPANY</Slink></Link></Sli>
      <Sli><Link href="/blog" passHref><Slink>TODAY'S YK</Slink></Link></Sli>
      <Sli><Link href="/links" passHref><Slink>LINKS</Slink></Link></Sli>
      <Sli><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></Sli>
      </Sul>

      <nav>
      <SmenuButton>
        <Shmenu id="h_menu" onClick={() => menuFunction()} className={openMenu ? 'active' : '' }>
          <span></span>
          <span></span>
          <span></span>
      </Shmenu>
      </SmenuButton>
      <Shcopy>
        <Shlogo>YK co.,Ltd.</Shlogo>
        <span>© yk kikaku co.,Ltd. all right reserved.</span>
      </Shcopy>
      <Snul className={openMenu ? 'active' : '' }>
        <Snli><Link href="/" passHref><Slink><span>ホーム</span>TOP</Slink></Link></Snli>
        <Snli><Link href="/about" passHref><Slink><span>YKについて</span>ABOUT</Slink></Link></Snli>
        <Snli><Link href="/service" passHref><Slink><span>サービス</span>SERVICE</Slink></Link></Snli>
        <Snli><Link href="/company" passHref><Slink><span>会社概要</span>COMPANY</Slink></Link></Snli>
        <Snli><Link href="/blog" passHref><Slink><span>きょうのYKたち</span>TODAY'S YK</Slink></Link></Snli>
        <Snli><Link href="/links" passHref><Slink><span>リンク</span>LINKS</Slink></Link></Snli>
        <Snli><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></Snli>
      </Snul>
      </nav>
    </Sheader>
  );
};

const Sheader = styled.header`
  position: relative;
  text-align: center;
  align-items: flex-start;
  color: #fff;
  font-family: futura-pt, sans-serif;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-style: normal;
  z-index: 100;
  opacity: 0;
`;

const SmenuButton = styled.div`
background: #000;
width: 85px;
height: 95px;
position: fixed;
right: 0;
top: 0;
z-index: 100;
@media screen and (max-width: 599px) {
  width: 70px;
  height: 75px;
}
#h_menu {
  position: relative;
  height: 100%;
  width: 100%;
  span {
    width: 29%;
    height: 2px;
    background: #fff;
    position: absolute;
    top: 36px;
    left: 27px;
    transition: .4s;
    @media screen and (max-width: 599px) {
      left: 20px;
    }
    &:nth-of-type(1) {
      top: 36px;
      @media screen and (max-width: 599px) {
        top: 25px;
      }
    }
    &:nth-of-type(2) {
      width: 40%;
      top: 49px;
      @media screen and (max-width: 599px) {
        top: 38px;
      }
    }
    &:nth-of-type(3) {
      width: 45%;
      top: 62px;
      @media screen and (max-width: 599px) {
        top: 51px;
      }
    }
}
&:hover {
  span {
  &:nth-of-type(1) {
    width: 45%;
  }
  &:nth-of-type(2) {
    width: 40%;
  }
  &:nth-of-type(3) {
    width: 29%;
  }
  }
}
&.active {
  background: #9a743a;
  span {
  &:nth-of-type(1) {
    top: 47px;
    transform: rotate(45deg);
    width: 45%;
    @media screen and (max-width: 599px) {
      top: 37px;
    }
  }
  &:nth-of-type(2) {
    left: -100%;
    opacity: 0;
  }
  &:nth-of-type(3) {
    top: 48px;
    transform: rotate(-45deg);
    @media screen and (max-width: 599px) {
      top: 38px;
    }
  }
  }
  &:hover {
    span {
    transform: rotate(0);
    &:nth-of-type(1) {
      width: 45%;
    }
    &:nth-of-type(3) {
      width: 45%;
    }
    }
  }
}
}
`;

  const Shmenu = styled.div`


`;

const Sul = styled.ul`
  width: 645px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  padding: 20px 125px 20px 20px;
  @media screen and (max-width: 768px) {
    width: 630px;
    padding: 20px 93px 20px 20px;
  }
  @media screen and (max-width: 599px) {
    display: none;
  }
`
const Sli = styled.li`
  margin-right: 2%;
  letter-spacing: .1em;
  a {
  position:relative;
  color: #000;
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: #000;
    transition: .5s;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
  svg {
    width: 20px;
    margin-top: 5px;
  }
  }
`
const Shcopy = styled.div`
font-family: futura-pt, sans-serif;
display: flex;
position: fixed;
transform: rotate(90deg);
top: 295px;
right: -135px;
align-items: center;
@media screen and (max-width: 599px) {
  top: 250px;
  right: -130px;
}
span {
  font-size: 11px;
  color: #d2c8b9;
  margin: 0;
  padding-left: 30px;
}
`
const Shlogo = styled.p`
font-size: 20px;
color: #9a743a;
margin: 0;
letter-spacing: .1em;
@media screen and (max-width: 599px) {
  font-size: 15px;
}
`

const Snul = styled.ul`
  position: fixed;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  padding: 20px 155px 20px 20px;
  transition: .8s;
  padding-top: 10%;
  overflow-y: scroll;
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
  li {
    opacity: 0;
    border-bottom: 1px solid #424242;
  }
  &.active {
    display: block;
    left: 0;
    opacity: 1;
    li {
      transition: .8s 1s;
      opacity: 1;
      a {
        @media screen and (max-width: 599px) {
          font-size: 20px;
        }
      }
    }
  }
`
const Snli = styled.li`
  letter-spacing: .1em;
  margin: 25px 5%;
  a {
    color: #fff;
    font-size: 36px;
    text-align: left;
    display: block;
    @media screen and (max-width: 599px) {
      font-size: 26px;
    }
    svg {
      width: 20px;
      padding-left: 9px;
      @media screen and (max-width: 599px) {
        width: 20px;
        padding-left: 13px;
      }
    }
  span {
    font-size:10px;
    display: block;
  }
  }
`
const Slink = styled.a`
  margin: 0 8px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
