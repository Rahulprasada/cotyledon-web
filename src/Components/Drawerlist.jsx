import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Globalimg from "../Assets/global-network.png";
import Savedimg from "../Assets/floppy-disk.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typostyle } from "./Landingscreens/Commonuse/Drawerstyle1";
import { Leftbar2 } from "./Landingscreens/Commonuse/Drawerstyle2";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Insidenavbarindestries from "./Landingscreens/Navbarindestries/Insidenavbarindestries";
import { Button } from "react-bootstrap";
import InsideConsulting from "./Landingscreens/Navbarindestries/InsideConsulting";
import InsidesInsides from "./Landingscreens/Navbarindestries/InsidesInsides";
import InsideAbout from "./Landingscreens/Navbarindestries/InsideAbout";

const Drawerlist = () => {
  const listes = [
    "Industries",
    "Consulting Services",
    "Digitals",
    "Insights",
    "About",
    "Career",
  ];

  const listes1 = [
    <Insidenavbarindestries />,
    <InsideConsulting />,
    <InsidesInsides />,
    <InsidesInsides />,
    <InsideAbout />
  ];

  const listes2 = ["Offices", "Alumni", "Media Center", "Subscribe", "Contact"];
  const [isAppBarHovered, setIsAppBarHovered] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const [checkedItems, setCheckedItems] = useState(
    Array(listes.length).fill(false)
  );
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [degitalClicked, setDegitalClicked] = useState(false);


  const handleChange = (index) => {
    if (index === 2) { 
      setDegitalClicked(!degitalClicked);
    }else{setCheckedItems((prev) => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      setSelectedIndex(index);
      setDrawerPosition(newCheckedItems[index] ? "left" : "right");
      return newCheckedItems;
    });
  }
  };

  const handleBackClick = () => {
    setCheckedItems(Array(listes.length).fill(false));
    setDrawerPosition("left");
  };

  const icon = (
    <Paper sx={{ m: 2, width: 100, height: 30 }} elevation={0}>
    <ArrowDropDownIcon sx={{ transform: "rotate(90deg)" }} />
    <Button variant="light"
        onClick={handleBackClick}
        sx={{ cursor: "pointer", marginTop: "10px"}}
      >
        Back
      </Button>
      {selectedIndex !== null && listes1[selectedIndex]}
    </Paper>
  );

  const toggleDrawer = (newOpen) => () => {
    console.log("you are clicked");
    setrotate(newOpen);
  };

  return (
    <>
      <Box sx={{ width: 300, marginTop: "30px" }} role="presentation">
        <div>
          <Typography
            variant="h5"
            onClick={toggleDrawer(false)}
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              color: "red",
              cursor: "pointer",
            }}
          >
            <IconButton
              edge="start"
              color="red"
              aria-label="menu"
              onClick={toggleDrawer(false)}
              sx={{
                color: isAppBarHovered ? "#cc0000" : "red",
                marginLeft: "10px",
                transform: "rotate(90deg)",
              }}
            >
              <MenuIcon />
            </IconButton>{" "}
            COTYLEDON
          </Typography>

          <List sx={{ paddingLeft: "55px", marginTop: "10px" }}>
            {listes.map((item, index) => (
              <div key={index}>
                <Slide
                  direction={drawerPosition}
                  in={checkedItems[index]}
                  mountOnEnter
                  unmountOnExit
                  sx={{ width: "290px", height: "1000px" }}
                >
                  {icon}
                </Slide>

                  <Typostyle
                    sx={{
                      marginTop: "10px",
                      ...(item === "Digitals" ? {textUnderlineOffset:'none', "&:hover":{textDecoration:'none', cursor:'unset'}} : {}),
                    }}
                    onClick={() => handleChange(index)}
                  >
                    {item}
                    {item !== "Digitals" && (
                      <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
                    )}
                  </Typostyle>
              </div>
            ))}
            <hr style={{ marginTop: "30px", width: "230px" }} />
          </List>

          <List sx={{ paddingLeft: "55px", marginTop: "2px" }}>
            <Leftbar2>
              Offices <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
            </Leftbar2>
            <Leftbar2>Alumni</Leftbar2>
            <Leftbar2>Media Center</Leftbar2>
            <Leftbar2>Subscribe</Leftbar2>
            <Leftbar2>Contact</Leftbar2>
            <Leftbar2>
              <img
                src={Globalimg}
                alt="no img"
                style={{ width: "16px", height: "16px" }}
              />{" "}
              <strong style={{ "&:hover": { color: "red" } }}>Global</strong> |
              English <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
            </Leftbar2>
            <Leftbar2>
              <strong style={{ "&:hover": { color: "red" } }}>
                <img
                  src={Savedimg}
                  alt="no images"
                  style={{ width: "16px", height: "16px" }}
                />
                SAVED ITEMS{" "}
                <ArrowDropDownIcon sx={{ transform: "rotate(270deg)" }} />
              </strong>
            </Leftbar2>
          </List>
        </div>
      </Box>
    </>
  );
};

export default Drawerlist;
