import styled from "styled-components";

export const Normalbtn = ()=> {
  return (
      <SBtn>

      </SBtn>
  );
}

const SBtn = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid #f2b741;
    @media screen and (max-width: 599px) {
      width: 95px;
      height: 95px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1px;
      height: 40px;
      background: #f2b741;
      transform: translate(-50%, -50%);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 72px;
      left: 50%;
      width: 25px;
      height: 25px;
      border-left: 1px solid #f2b741;
      border-bottom: 1px solid #f2b741;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%) rotate(-45deg);
      @media screen and (max-width: 599px) {
        bottom: 30px;
      }
    }
`
