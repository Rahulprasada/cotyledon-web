import { Input, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

const Part5 = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ padding: "34px", backgroundColor: "black", height: "500px", paddingTop: "50px" }}
    >
      <Grid xs={12} sm={6}>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h4"
            color="#fff"
            fontSize={"21px"}
            lineHeight={"35.7px"}
            padding={"3px"}
          >
            Stay ahead in a rapidly changing world. Subscribe to Bain Insights,
            our monthly look at the critical issues facing global businesses.
          </Typography>
          <Grid item xs={6} sm={3}>
            <Typography
              variant="h5"
              color="#fff"
              fontSize={"21px"}
              lineHeight={"35.7px"}
              padding={"3px"}
            >
              COTYLEDON
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={6}>
        <Grid item xs={12} sm={11}>
          <Input
            style={{
              marginLeft: "20px",
              border: "2px solid #424242",
              padding: "10px",
              backgroundColor: "#424242",
              color: "white",
              width: "400px",
            }}
            placeholder="Your email address"
            color="white"
          ></Input>
          <Button sx={{backgroundColor:'red', padding:'15px', borderRadius:'0px', color:'#fff', fontWeight:'bold', marginLeft:'30px'}}>SUBSCRIBE</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Part5;

