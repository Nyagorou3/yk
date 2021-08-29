import styled from "styled-components";
import { Aboutsec1 } from "../compornents/oragenism/about/Aboutsec1";
import { Aboutsec2 } from "../compornents/oragenism/about/Aboutsec2";
import { Aboutsec3 } from "../compornents/oragenism/about/Aboutsec3";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";
import Seo from '../compornents/Seo2';
import Loading from '../compornents/Loading';
import { ReactElement, useEffect, useState } from 'react';


export default function About() {

  const [ isShowLoading, setIsShowLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 2000);
  });
  return (
      <>
    <DefaltLeyout>
    <Seo title="YK企画について | 株式会社YK企画" description="YK企画について | YK企画は、設備の点検からデザインまで職種などの枠にとらわれず多岐に渡って柔軟に事業を展開しています。" />
    <Loading isShow={ isShowLoading }  />
      <Aboutsec1 />
      <Aboutsec2 />
      <Aboutsec3 />
    </DefaltLeyout>
      </>
  );
};
