import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/system";
import Drawerlist from "./Drawerlist";
import Insideindestry from "./Landingscreens/Industrypart/Insideindestry.jsx";
import Consultinginside from "./Landingscreens/consultinginside/Consultinginside.jsx";
import SearchIcon from "@mui/icons-material/Search";
import Saveicon from "@mui/icons-material/BookmarkBorder";
import Insideinsides from "./Landingscreens/Insideinsides/Insideinsides.jsx";

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    {
      label: "Industries",
      listItems: [{ label: <Insideindestry />, link: "indestry" }],
      link: "",
    },
    {
      label: "Consulting Services",
      listItems: [{ label: <Consultinginside />, link: "/" }],
      link: "/about",
    },
    {
      label: "Digital",
      link: "/contact",
    },
    {
      label: "Insights",
      listItems: [{ label: <Insideinsides />, link: "/" }],
      link: "/contact",
    },
    {
      label: "About",
      link: "/contact",
    },
  ];

  const [listItems, setListItems] = useState([]);
  const [isAppBarHovered, setIsAppBarHovered] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rotate, setrotate] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setrotate(newOpen);
  };

  const PopOver = ({ open }) => {
    const style = {
      position: "absolute",
      top: 50,
      transform: "left",
      bgcolor: "white",
      color: "black",
      padding: 4,
      zIndex: 1000,
      width: "900px",
    };

    return (
      <>
        {open && (
          <Box sx={style}>
            {listItems?.map((i) => (
              <Typography
                key={i.label}
                variant="h6"
                sx={{
                  cursor: "pointer",
                  fontSize: "1.0rem",
                  display: "flex",
                  alignItems: "center",
                  "&:hover .arrow-icon": {
                    transform: "rotate(180deg)",
                  },
                }}
                onClick={() => (window.location.href = `${i.link}`)}
              >
                {i.label}
              </Typography>
            ))}
          </Box>
        )}
      </>
    );
  };

  useEffect(() => {
    if (rotate) {
      const timeoutId = setTimeout(() => {
        setOpen(true);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
    setOpen(false);
  });

  const DrawerList = (
    <div style={{ display: "flex" }}>
      <Drawerlist toggleDrawer={toggleDrawer} />
      <div style={{ backgroundColor: "transparent" }}>
        <CloseIcon
          sx={{
            backgroundColor: "red",
            width: "40px",
            color: "white",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={toggleDrawer(false)}
        />
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isScrolled ? "white" : "transparent",
          color: isScrolled ? "black" : "white",
          "&:hover": { bgcolor: "white", color: "black" },
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
        onMouseEnter={() => setIsAppBarHovered(true)}
        onMouseLeave={() => setIsAppBarHovered(false)}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "lg",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 1000,
          }}
        >
          <Grid
            container
            sx={{
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            <Grid md={6} xs={12} display={"flex"}>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  color: isScrolled
                    ? "red"
                    : isAppBarHovered
                    ? "black"
                    : "white",
                  transform: rotate ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer open={open}>{DrawerList}</Drawer>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: isScrolled
                    ? "red"
                    : isAppBarHovered
                    ? "black"
                    : "white",
                  transition: "color 0.3s ease",
                }}
                onClick={() => (window.location.href = "/")}
                className="logo"
              >
                Cotyledon
              </Typography>
            </Grid>
            {!isMobile && (
              <div style={{ display: "flex", marginLeft: "50px" }}>
                {items.map((i, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      color: hoveredIndex === index && "#cc0000",
                      cursor: "pointer",
                      fontSize: "1.0rem",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                      "&:hover .arrow-icon": {
                        color: hoveredIndex === index && "#cc0000",
                        transform: "rotate(180deg)",
                      },
                      position: "relative",
                    }}
                    onClick={() => (window.location.href = `${i.link}`)}
                    onMouseEnter={() => {
                      i?.listItems && setHoveredIndex(index);
                      setListItems(i.listItems);
                    }}
                    onMouseLeave={() => {
                      i?.listItems && setHoveredIndex(null);
                      setListItems([]);
                    }}
                  >
                    <PopOver list={i?.listItems} open={hoveredIndex === index} />
                    {i.label} {i.listItems && (
                      <ArrowDropDownIcon
                        className="arrow-icon"
                        sx={{
                          color: isAppBarHovered && "#cc0000",
                          display: "inline-flex",
                          transition: "transform 0.3s",
                        }}
                      />
                    )}
                  </Typography>
                ))}
              </div>
            )}
          </Grid>
          <div>
            <Typography
              variant="p"
              sx={{ color: isScrolled ? "red" : isAppBarHovered ? "black" : "white",
                "&:hover": { color: "darkgrey", cursor: "pointer" },
              }}
            >
              Explore <SearchIcon sx={{ color: isScrolled ? "red" : isAppBarHovered ? "black" : "white" }} /> | 
              <Saveicon sx={{ color: isScrolled ? "red" : isAppBarHovered ? "black" : "white" }} />
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
