import styled from "styled-components";
import { Aboutsec1 } from "../compornents/oragenism/about/Aboutsec1";
import { Aboutsec2 } from "../compornents/oragenism/about/Aboutsec2";
import { Aboutsec3 } from "../compornents/oragenism/about/Aboutsec3";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";

export default function About() {
  return (
      <>
    <DefaltLeyout>
      <Aboutsec1 />
      <Aboutsec2 />
      <Aboutsec3 />
    </DefaltLeyout>
      </>
  );
};
