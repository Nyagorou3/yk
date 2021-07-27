import styled from "styled-components";
import { Aboutsec1 } from "../compornents/oragenism/about/Aboutsec1";
import { Aboutsec2 } from "../compornents/oragenism/about/Aboutsec2";
import { Aboutsec3 } from "../compornents/oragenism/about/Aboutsec3";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";
import Seo from '../compornents/Seo'

export default function About() {
  return (
      <>
    <DefaltLeyout>
    <Seo title="YK企画について | 株式会社YK企画" description="YK企画について | YK企画は、設備の点検からデザインまで職種などの枠にとらわれず多岐に渡って柔軟に事業を展開しています。" />
      <Aboutsec1 />
      <Aboutsec2 />
      <Aboutsec3 />
    </DefaltLeyout>
      </>
  );
};
