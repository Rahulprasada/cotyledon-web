import { Grid } from "@mui/system";
import React from "react";

const Consultinginside = () => {
  const array = [
    "Aerospace & Defense",
    "Automotive & Mobility",
    "Aviation",
    "Consumer Products",
    "Energy & Natural Resources",
    "Agribusiness",
    "Chemicals",
    "Mining",
    "Oil & Gas",
    "Utilities & Renewables",
  ];
  const array2 = [
    "Banking",
    "Insurance",
    "Payments",
    "Wealth & Asset Management",
    "Fintech",
    "Digital Assets and Blockchain",
    "Forest Products, Paper & Packaging",
    "Healthcare & Life Sciences",
    "Pharmaceuticals",
    "Medical Technology",
    "Healthcare Payers",
    "Healthcare Providers and Services",
  ];

  const array3 = [
    "Machinery & Equipment",
    "Media & Entertainment",
    "Metals",
    "Private Equity",
    "Real Estate",
    "Retail",
    "Grocery",
    "Fashion & Luxury",
    "Restaurants",
  ];

  const array4 = [
    "Technology",
    "Cloud Computing",
    "Hardware",
    "IT Services",
    "Semiconductors",
    "Software",
    "Telecommunications",
    "Transportation",
    "Freight & Logistics",
    "Public Transit",
  ];

  const style = {
    fontFamily: 'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
    fontWeight: "bold",
    fontSize: "21px",
    textAlign: "left",
  };

  const style2 = {
    fontFamily: "Graphik",
    fontSize: "14px",
    lineHeight: "20.16px",
    textAlign: "left",
    color: "#333333",
    fontWeight: "600",
  };

  const liststyle = {
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    listStyle: "none",
    color: "333333",
    margin: "3px",
  };
  return (
    <Grid container spacing={3} padding={2}>
      <Grid xs={10} md={5} display={"flex"}>
        <div style={{ left: "100" }}>
          <p style={style}>Consulting Services</p>
          <li style={liststyle}>Costumer Experiances</li>
          <li style={liststyle}>Sustainability</li>
          <li style={liststyle}>Innovation</li>
        </div>
      </Grid>
      <Grid sx={10} md={5} marginLeft={"40px"} marginTop={"40px"}>
        <li style={liststyle}>M&A</li>
        <li style={liststyle}>Operations</li>
        <li style={liststyle}>Peopple And Organization</li>
      </Grid>
      <Grid sx={10} md={5} marginLeft={"40px"} marginTop={"40px"}>
      <li style={liststyle}>Private Equity</li>
        <li style={liststyle}>Sales ANd Marketing</li>
        <li style={liststyle}>Strategy</li>
      </Grid>
      <Grid sx={12} md={5} marginLeft={"40px"} marginTop={"40px"}>
        <li style={liststyle}>AI,Insights and Solutions</li>
        <li style={liststyle}>Transformation</li>
      </Grid>
    </Grid>
  );
};

export default Consultinginside;
