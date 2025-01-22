import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Indusryimg from "../../../Assets/pysss.JPG";
import { Button } from "@mui/material";
import { Grid } from "@mui/system";

const Mainsection = styled.section`
  padding: 70px 0px;

  h1 {
    font-size: 2.5rem;
  }
  p {
    padding: 10px 0;
  }
  img {
    width: 100%;
    max-width: 400px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      margin-left: 0;
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default function Industry() {
  return (
    <Mainsection>
      <Container>
        <Row>
          <Col md={7}>
            <h1>We champion the bold to achieve the extraordinary.</h1>
            <p>
              Answer two questions and put our thinking to work on your
              challenges.
            </p>
            <div>
              <h5>
                1. What is your industry?{" "}
                <span style={{ color: "#bcbdbe", fontSize: "1rem" }}>
                  Question 1 to 2
                </span>
              </h5>
              {[
                "Retail",
                "Private Equity",
                "Advanced Manufacturing & Services",
                "Technology",
                "Oil & Gas",
                "Healthcare & life Science",
                "Chemicals",
                "Consumer Products",
                "Mining",
                "Financial Service",
              ].map((label) => (
                <Button
                  sx={{
                    width: "auto",
                    margin: "5px",
                    padding: "10px 15px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    borderRadius: "40px",
                    color: "red",
                    border: "2px solid #f8f6f4",
                    "&:hover": {
                      backgroundColor:'red',
                      color: "white",
                    },
                  }}
                  key={label}
                >
                  {label}
                </Button>
              ))}
              <br />
              <a style={{ color: "grey" }} href="/">
                View all
              </a>
            </div>
          </Col>
          <Col md={5}>
            <img src={Indusryimg} alt="industry img" />
          </Col>
          <Grid xs={6} md={6}>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Button
                sx={{
                  width: "250px",
                  backgroundColor: "#FFF",
                  color: "red",
                  fontWeight: "BOLD",
                  padding: "15px",
                  border: "2px solid #dcdcdc",
                  "&:hover": {
                    backgroundColor: "#981d25",
                    color: "#fff",
                  },
                }}
              >
                SEE ALL CLIENT RESULTS
              </Button>
            </div>
            </Grid>
        </Row>
      </Container>
    </Mainsection>
  );
}
