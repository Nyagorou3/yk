import styled from "styled-components";
import { Servicesec1 } from "../compornents/oragenism/service/Servicesec1";
import { Servicesec2 } from "../compornents/oragenism/service/Servicesec2";
import { Servicesec3 } from "../compornents/oragenism/service/Servicesec3";
import { Servicesec4 } from "../compornents/oragenism/service/Servicesec4";
import { TopContact } from "../compornents/oragenism/top/TopContact";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";
import Seo from '../compornents/Seo2';
import Loading from '../compornents/Loading';
import { ReactElement, useEffect, useState } from 'react';

export default function Service() {
  const [ isShowLoading, setIsShowLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 2000);
  });

  return (
      <>
      <DefaltLeyout>
      <Seo title="YK企画の展開する事業 | 株式会社YK企画" description="YK企画の展開する事業 | YK企画の展開する事業を紹介します。" />
      <Loading isShow={ isShowLoading }  />
      <Servicesec1 />
      <Servicesec3 />
      <Servicesec4 />
      <TopContact />
      </DefaltLeyout>
      </>
  );
};
