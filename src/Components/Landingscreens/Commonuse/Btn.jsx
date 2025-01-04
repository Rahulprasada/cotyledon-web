import React from "react";
import styled from "styled-components";
export default function Btn() {
  return <Viewall>View All</Viewall>;
}
const Viewall = styled.button`
  background: #c00;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 1.25rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 200ms;
  width: 100%;
  border: 1px solid #c00;

  &:hover {
    background-color: red;
  }
`;
