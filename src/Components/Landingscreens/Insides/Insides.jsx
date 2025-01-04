import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Insideblog from "./Insideblog";
import Btn from "../Commonuse/Btn";
export default function Insides() {
  return (
    <Mainsection>
      <Container>
        <Heading>
          <h1>Our Latest Insights</h1>
        </Heading>

        <Row>
          <Col md={6}>
            <Insideblog className="Vline" />
          </Col>
          <Col md={6}>
            <Insideblog />
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={4}></Col>
          <Col md={4}>
            <Btn />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </Mainsection>
  );
}
const Mainsection = styled.section`
  padding: 75px 0;
`;
const Heading = styled.div`
  text-align: center;
  font-size: 36px;
  padding: 10px 15px;
  margin: 5px;
  h1 {
    position: relative;
    &::before {
      position: absolute;
      left: 55px;
      top: 25px;
      width: 30%;
      content: "";
      border: 1px solid #ead9d9;
    }
    &::after {
      position: absolute;
      right: 55px;
      top: 25px;
      width: 30%;
      content: "";
      border: 1px solid #ead9d9;
    }
  }

  .Vline {
    border-right: 1px solid #000;
    height: 100%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 5px;
  }
`;
