import styled from "styled-components";
import { Servicesec1 } from "../compornents/oragenism/service/Servicesec1";
import { Servicesec3 } from "../compornents/oragenism/service/Servicesec3";
import { TopContact } from "../compornents/oragenism/top/TopContact";
import DefaltLeyout  from "../compornents/templatets/DefaltLeyout";


export default function Service() {
  return (
      <>
      <DefaltLeyout>
      <Servicesec1 />
      <Servicesec3 />
      <TopContact />
      </DefaltLeyout>
      </>
  );
};
