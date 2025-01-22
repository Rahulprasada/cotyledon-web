import { List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Typostyle4 } from "../Commonuse/Drawerstyle3";

const InsideConsulting = () => {
  const detailes2 = [
    "Costumer Experience & Growth",
    "Sustainability",
    "Innovation",
    "M&A",
    "Operations",
    "People & Organization",
    "Private Equity",
    "Sales & Marketing",
    "Strategy",
    "AI, Insights, and Solutions",
    "Transformation",
    "Digital",
    "Insights",
    "About",
    "Careers",
    "Offices",
    "Alumni",
    "Media Center",
    "Subscribe",
    "Contact",
    "Global | English",
    "Saved items",
  ];
  return (
    <div>
      <List sx={{ paddingLeft: "55px", marginTop: "10px" }}>
      <p style={{fontWeight:'bold'}}>Consulting Services</p>
        <Box>
          {detailes2.map((item, index) => (
            <div key={index}>
              <Typostyle4 sx={{ marginTop: "10px" }}>
                {item}
              </Typostyle4>

            </div>
          ))}
        </Box>
      </List>
      </div>
  );
};

export default InsideConsulting;
