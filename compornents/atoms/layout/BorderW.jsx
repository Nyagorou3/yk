import styled from "styled-components";


export const BorderW = ()=> {
  return (
    <SborderWrap>
      <Border1></Border1>
      <Border22></Border22>
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
  background: #1f1f1f;
`
const Border22 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 30%;
  background: #1f1f1f;
`
const Border3 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 50%;
  background: #1f1f1f;
`
const Border4 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 70%;
  background: #1f1f1f;
`
const Border5 = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  left: 90%;
  background: #1f1f1f;
`
