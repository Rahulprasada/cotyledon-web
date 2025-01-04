import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, List, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import Globalimg from "../Assets/global-network.png";
import Savedimg from "../Assets/floppy-disk.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Drawerlist = () => {
  const [isAppBarHovered, setIsAppBarHovered] = useState(false);
  const [rotate, setrotate] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    console.log("you are clicked");
    setrotate(newOpen);
  };
  return (
    <Box sx={{ width: 300, marginTop: "30px" }} role="presentation">
      <div>
        <Typography
          variant="h5"
          onClick={toggleDrawer(false)}
          sx={{
            fontFamily: 'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
            color: "red",
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
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              "&:hover":{color:'red'}
            }}
          >
            Industries<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              marginTop:'8px',
              "&:hover":{color:'red'}
            }}
          >
            Consulting Services<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              marginTop:'8px',
              "&:hover":{color:'red'}
            }}
          >
           Degital<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              marginTop:'8px',
              "&:hover":{color:'red'}
            }}
          >
            Insights<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              marginTop:'8px',
              "&:hover":{color:'red'}
            }}
          >
            About<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>
          <Typography
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "550",
              cursor: "pointer",
              marginTop:'8px',
              "&:hover":{color:'red'}
            }}
          >
            Career<ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </Typography>

          <hr style={{ marginTop: "30px", width: "230px" }} />
        </List>
        <List sx={{ paddingLeft: "55px", marginTop: "2px" }}>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              "&:hover":{color:'red'}
            }}
          >
            Offices <ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
              "&:hover":{color:'red'}
            }}
          >
            Alumni 
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
              "&:hover":{color:'red'}
            }}
          >
            Media Center 
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
              "&:hover":{color:'red'}
            }}
          >
            Subscribe 
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
              "&:hover":{color:'red'}
            }}
          >
            Contact
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
              "&:hover":{color:'red'}
            }}
          >
            <img
              src={Globalimg}
              alt="no img"
              style={{ width: "16px", height: "16px", }}
            />{" "}
            <strong style={{"&:hover":{color:'red'}}}>Global</strong> | English <ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
          </li>
          <li
            style={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "14px",
              lineHeight: "20.16px",
              textAlign: "left",
              letterSpacing: "normal",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <strong style={{"&:hover":{color:'red'}}}>
              <img
                src={Savedimg}
                alt="no images"
                style={{ width: "16px", height: "16px" }}
              />
              SAVED ITEMS <ArrowDropDownIcon sx={{transform:'rotate(270deg)'}} />
            </strong>
          </li>
        </List>
      </div>
    </Box>
  );
};

export default Drawerlist;
