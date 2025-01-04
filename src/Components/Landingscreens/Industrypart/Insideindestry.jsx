import React from "react";
import { Grid, Typography } from "@mui/material";

const Insideindestry = () => {
  const industries = [
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

  const financialServices = [
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

  const infrastructure = [
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

  const socialSector = [
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

  const sectionStyle = {
    fontFamily: 'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
    fontWeight: "bold",
    fontSize: "21px",
    textAlign: "left",
  };

  const itemStyle = {
    fontFamily: "Graphik",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#333",
    fontWeight: "600",
  };

  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12} md={6}>
        <Typography style={sectionStyle}>Industries</Typography>
        {industries.map((industry, index) => (
          <Typography
            key={index}
            component="li"
            sx={{ ...itemStyle, listStyle: "none" }}
          >
            {industry}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={sectionStyle}>Financial Services</Typography>
        {financialServices.map((service, index) => (
          <Typography
            key={index}
            component="li"
            sx={{ ...itemStyle, listStyle: "none" }}
          >
            {service}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={sectionStyle}>
          Infrastructure & Construction
        </Typography>
        {infrastructure.map((infra, index) => (
          <Typography
            key={index}
            component="li"
            sx={{ ...itemStyle, listStyle: "none" }}
          >
            {infra}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={sectionStyle}>Social & Public Sector</Typography>
        {socialSector.map((sector, index) => (
          <Typography
            key={index}
            component="li"
            sx={{ ...itemStyle, listStyle: "none" }}
          >
            {sector}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Insideindestry;
