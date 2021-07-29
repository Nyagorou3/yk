import styled from "styled-components";
import Link from "next/link";

export const Txtbtnc = props=> {
  return (
      <Link href={props.to} passHref>
      <Stbtnwp>
        {props.btntxt}
        <StBtn>
        </StBtn>
        </Stbtnwp>
      </Link>
);
}

const Stbtnwp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  font-family: futura-pt, sans-serif;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 599px) {
    font-size: 18px;
    letter-spacing: .1em;
  }
`
const StBtn = styled.div`
      position: relative;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 2px solid #413319;
      margin-left: 20px;
      transition: .5s;
      @media screen and (max-width: 599px) {
        width: 70px;
        height: 70px;
      }
    &::before {
      transition: .5s;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 32px;
      height: 2px;
      background: #000000;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 599px) {
        width: 22px;
      }
    }
    &::after {
      transition: .5s;
      content: '';
      position: absolute;
      top: 50%;
      right: 28px;
      width: 15px;
      height: 15px;
      border-left: 2px solid #000000;
      border-bottom: 2px solid #000000;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateY(-50%) rotate(-135deg);
      @media screen and (max-width: 599px) {
        right: 23px;
      }
    }
    &:hover {
       background: #000000;
       &::before {
          background: #fff;
         }
      &::after {
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        }
    }
`
