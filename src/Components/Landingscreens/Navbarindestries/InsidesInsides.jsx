import { List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Typostyle } from "../Commonuse/Drawerstyle1";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typostyle4 } from "../Commonuse/Drawerstyle3";

const InsidesInsides = () => {
  const insights = [
    "Industry Insights",
    "Services Insights",
    "Bain Books",
    "Webinars",
    "Bain Futures",
    "View all Insights",
  ];

  const insights2 = [
    "Featured topics",
    "Artificial Intelligence",
    "Managing Inflation",
    "Thriving in Uncertainty",
    "The Talent Imperative",
    "Macro Trends",
    "Technology Report",
    "CEO's Guide to Sustainability",
    "Gaming Report",
    "Midyear M&A Report",
    "Machinery & Equipment Report",
    "CEO Insights",
    "CFO Insights",
    "COO Insights",
    "CIO Insights",
    "CMO Insights",
  ];
  return (
    <div>
      <List sx={{ paddingLeft: "55px", marginTop: "10px" }}>
      <p style={{fontWeight:'bold'}}>Insights</p>
        <Box>
          {insights.map((item, index) => (
            <div key={index}>
              <Typostyle4 sx={{ marginTop: "10px" }}>
                {item}
                <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
              </Typostyle4>
            </div>
          ))}
           <hr style={{ marginTop: "30px", width: "230px" }} />
           {insights2.map((item,index) => (
           <div key={index}>
            <Typostyle sx={{backgroundColor:'#F9F9F9', marginTop:'10px'}}>
             {item}
             </Typostyle>
           </div>
           ))}
        </Box>
      </List>
    </div>
  );
};

export default InsidesInsides;
