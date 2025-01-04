import React from "react";
import styled from "styled-components";
export default function Verticalline() {
  return <Vline></Vline>;
}
const Vline = styled.div`
  border-right: 1px solid #000;
  height: 100%;
  width: 1px;
  position: absolute;
  right: 0;
  top: 5px;
`;
