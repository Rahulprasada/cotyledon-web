import React from "react";
import Image2 from "../Assets/img3.jpg";
import { Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "react-bootstrap";
import { color, display } from "@mui/system";

export default function Firstpg() {
  const roundbutton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    borderRadius: "50%",
    marginRight: "10px",
    "&:hover":{color:'red'}
  };
  return (
    <>
      <Grid container spacing={4} sx={{ padding: "30px" }}>
        {/* Left Side: Image */}
        <Grid item xs={12} md={6}>
          <img
            src={Image2}
            alt="No images"
            style={{
              width: "90%",
              height: "auto",
              marginTop: "20px",
            }}
          />
        </Grid>

        {/* Right Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3.5rem",
              marginBottom: "16px",
            }}
          >
            Bold steps forward.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "blue",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            See how we’ve helped ambitious clients achieve extraordinary
            outcomes.
          </Typography>

          <Grid item xs={12} md={10} display="flex">
            <Typography
              variant="h5"
              sx={{ fontSize: "1.1rem", fontWeight: "300", padding: "30px" }}
            >
              Featured Client Success Story
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontSize: "1.1rem", fontWeight: "300", padding: "30px" }}
            >
              How We Helped?
            </Typography>
          </Grid>

          <Grid item md={9} display={"flex"}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "1.7rem" }}
            >
              Sales Force Integration Generats M&A Success in Healthcare
              <p style={{ color: "red", fontSize: "1.5rem", padding: "20px" }}>
                Read Story{" "}
                <ArrowDropDownIcon
                  className="arrow-icon"
                  sx={{
                    rotate: "270deg",
                    color: "black",
                    display: "inline-flex",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "rotate(360deg)" },
                  }}
                />
              </p>
            </Typography>

            <Typography
              variant="p"
              sx={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                paddingLeft: "30px",
              }}
            >
              Elements Of Value
              <p style={{ color: "red", fontSize: "1.5rem", padding: "20px" }}>
                Read Story{" "}
                <ArrowDropDownIcon
                  className="arrow-icon"
                  sx={{
                    rotate: "270deg",
                    color: "black",
                    display: "inline-flex",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "rotate(360deg)" },
                  }}
                />
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Button style={roundbutton}></Button>
          <Button style={roundbutton}></Button>
          <Button style={roundbutton}></Button>
          <Button style={roundbutton}></Button>
        </div>
      </Grid>
    </>
  );
}
