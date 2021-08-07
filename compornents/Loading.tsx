import styled, { css, keyframes } from 'styled-components';
import Logo from "../image/common/logo.png";

const Load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Attack = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.4, 1.4);
  }
`

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: rgb(33 25 37);
  pointer-events: auto;
  transition: opacity .2s ease-in-out;
  z-index: 1000;
  &[data-is-show='false'] {
    opacity: 0;
    pointer-events: none;
  }
  p {
    position: absolute;
    top: 50%;
    width: 90%;
    left: 50%;
    color: #8c6a3a;
    font-size: 1.2em;
    font-weight: 600;
    font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3","游ゴシック体", YuGothic , "游ゴシック", "Yu Gothic";
    transform: translate(-50%, -50%);
    letter-spacing: .2em;
    text-align: center;
    line-height: 1;
    span {
      font-size: .5em;
      font-weight: 600;
      letter-spacing: .15em;
    }
    img {
      margin-bottom: 25px;
    }
  }

`

export default function Loading({ isShow }: {
  isShow: boolean;
}) {
  return (
    <Wrapper data-is-show={ String(isShow) }>
      <p><img src={Logo.src} alt="YK企画" /><br />
      YK企画
      <br />
      <span>関わる全ての人々に便利と快適を。</span></p>
    </Wrapper>
  );
}
