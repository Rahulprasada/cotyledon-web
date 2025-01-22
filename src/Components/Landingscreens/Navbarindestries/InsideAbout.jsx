import { List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Typostyle4 } from "../Commonuse/Drawerstyle3";
import { Typostyle } from "../Commonuse/Drawerstyle1";

const InsideAbout = () => {
  const about = [
    "What We Do",
    "What We Believe",
    "Our People & Leadership",
    "Client Results",
    "Awards & Recognition",
    "Global Affiliations",
  ];

  const about2 = [
    "Further: Our global responsibility",
    "Diversity, Equity & Inclusion",
    "Social Impact",
    "Sustainability",
    "World Economic Forum",
    "Learn more about Further",
  ];
  return (
    <div>
      <List sx={{ paddingLeft: "55px", marginTop: "10px" }}>
        <Box>
            <p style={{fontWeight:'bold'}}>About</p>
          {about.map((item, index) => (
            <div key={index}>
              <Typostyle4 sx={{ marginTop: "10px" }}>{item}</Typostyle4>
            </div>
          ))}
          <hr style={{ marginTop: "30px", width: "230px" }} />
          {about2.map((item, index) => (
            <div key={index}>
              <Typostyle sx={{ backgroundColor: "#F9F9F9", marginTop: "10px" }}>
                {item}
              </Typostyle>
            </div>
          ))}
        </Box>
      </List>
    </div>
  );
};

export default InsideAbout;
