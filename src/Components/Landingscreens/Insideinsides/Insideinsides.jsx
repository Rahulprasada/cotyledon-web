import { List } from "@mui/material";
import { fontFamily, Grid } from "@mui/system";
import React from "react";

const Insideinsides = () => {
  const insides = [
    "Industry Insights",
    "Services Insights",
    "Bain Books",
    "Webinars",
    "Bain Futures",
  ];

  const featuretopics = [
    "Artificial Intelligence",
    "Managing Inflation",
    "Thriving in Uncertainty",
    "The Talent Imperative",
    "Macro Trends",
  ];

  const part4 = [
    "CEO Insights",
    "CFO Insights",
    "COO Insights",
    "CIO Insights",
    "CMO Insights",
  ];

  const part3 = [
    "Technology Report",
    "CEO's Guide to Sustainability",
    "Gaming Report",
    "Midyear M&A Report",
    "Machinery & Equipment Report",
  ];
  return (
    <>
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid item sx={12} md={6}>
          <p
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "21px",
              lineHeight: "27.993px",
              fontWeight: "bold",
            }}
          >
            Insites
          </p>
          {insides.map((e, i) => (
            <List
              style={{
                fontFamily:
                  'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              }}
            >
              {e}
            </List>
          ))}
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            View All Insites
          </a>
        </Grid>
        <div
          class="vertical-hr"
          style={{
            marginTop: "-8px",
            width: "1px",
            height: "50vh",
            right: "10px",
            backgroundColor: "#dadada",
          }}
        ></div>
        <Grid xs={12} md={6}>
          <p
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "18px",
              lineHeight: "30.1px",
              color: "#767676",
            }}
          >
            Featured Topics
          </p>
          {featuretopics.map((e, i) => (
            <List
              style={{
                fontFamily:
                  'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              }}
            >
              {e}
            </List>
          ))}
          <a style={{ textDecoration: "none", color: "red" }} href="#">
            View All Featured Topics
          </a>
        </Grid>
        <Grid xs={12} md={6} marginTop={"47px"}>
          {part3.map((e, i) => (
            <List
              style={{
                fontFamily:
                  'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              }}
            >
              {e}
            </List>
          ))}
        </Grid>
        <Grid xs={12} md={6} marginTop={"47px"}>
          {part4.map((e, i) => (
            <List
              style={{
                fontFamily:
                  'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              }}
            >
              {e}
            </List>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Insideinsides;
