import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { List } from "@mui/material";
import { Box } from "@mui/system";
import { Typostyle4 } from "../Commonuse/Drawerstyle3";

const Insidenavbarindestries = () => {
  const detailes = [
    "Aerospace & Defense",
    "Automotive & Mobility",
    "Aviation",
    "Consumer Products",
    "Energy & Natural Resources",
    "Financial Services",
    "Forest Products, Paper & Packaging",
    "Healthcare & Life Sciences",
    "Infrastructure & Construction",
    "Machinery & Equipment",
    "Media & Entertainment",
    "Metals",
    "Private Equity",
    "Real Estate",
    "Retail",
    "Social & Public Sector",
    "Technology",
    "Telecommunications",
    "ransportation",
  ];
  const [checkedItems, setCheckedItems] = React.useState(
    Array(detailes.length).fill(false)
  );

  const handleChange = (index) => {
    setCheckedItems(false)
  };


  return (
    <div>
      <List sx={{ paddingLeft: "55px", marginTop: "10px" }}>
      <p style={{fontWeight:'bold'}}>Industries</p>
        <Box>
          {detailes.map((item, index) => (
            <div key={index}>
              <Typostyle4 sx={{ marginTop: "10px" }}>
                {item}
                <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
              </Typostyle4>
            </div>
          ))}
        </Box>
      </List>
    </div>
  );
};
export default Insidenavbarindestries;
