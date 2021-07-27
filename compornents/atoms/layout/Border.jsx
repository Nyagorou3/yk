import styled from "styled-components";


export const Border = ()=> {
  return (
    <SborderWrap>
      <Border1></Border1>
      <Border2></Border2>
      <Border3></Border3>
      <Border4></Border4>
      <Border5></Border5>
    </SborderWrap>
  );
}

const SborderWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const Border1 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 10%;
  background: #aaa9ab;
`
const Border2 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 30%;
  background: #aaa9ab;
`
const Border3 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 50%;
  background: #aaa9ab;
`
const Border4 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 70%;
  background: #aaa9ab;
`
const Border5 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 90%;
  background: #aaa9ab;
`
