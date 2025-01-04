import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image3 from "../Assets/image.jpg";
import Image4 from "../Assets/image2.jpg";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export default function Part4() {
  
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  return (
    <>
      <Grid container spacing={4} sx={{ padding: "34px" }}>
        <Root>
          <Divider
            sx={{
              fontFamily:
                'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
              fontSize: "32px",
              color: "black",
            }}
          >
            Our Latest Insights
          </Divider>
        </Root>
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <img src={Image4} alt="no images" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Image3} alt="no img" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} style={{padding:'30px'}}>
          <Typography
            variant="h5"
            sx={{
              color: "#cc0000",
              fontSize: "13px",
              textAlign: "start",
              lineHeight: "18.72px",
              padding:'5px'
            }}
          >
            Sustainability
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "21px",
              textAlign: "start",
              lineHeight: "30.24px",
              padding:'5px',
              cursor:'pointer',
              fontWeight:'bold',
              "&:hover":{
                color:'red'
              }
            }}
          >
            AI and Sustainability: The Power of Integration
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "15px",
              textAlign: "start",
              lineHeight: "21.6px",
              padding:'5px',
              fontWeight:'500'
            }}
          >
           Three practices will help companies deploy a more carbon-conscious “eco-AI” approach to their technology and sustainability priorities.
          </Typography>
          <div style={{fontSize:'16px', lineHeight:'23.04px'}}>
                <p style={{paddingTop:'40px'}}></p>
          </div>
          <Typography
            variant="p"
            sx={{
              color: "#767676",
              fontSize: "13px",
              textAlign: "start",
              lineHeight: "18.72px",
              padding:'5px',
              cursor:'pointer',
              fontFamily:'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"'
            }}
          >
            The Visionary CEO's Guide to Sustainability
          </Typography>
        </Grid>



        
        <Grid item xs={12} md={6} style={{padding:'30px'}}>
          <Typography
            variant="h5"
            sx={{
              color: "#cc0000",
              fontSize: "13px",
              textAlign: "start",
              lineHeight: "18.72px",
              padding:'5px'
            }}
          >
            Innovation 
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "21px",
              textAlign: "start",
              lineHeight: "30.24px",
              padding:'5px',
              cursor:'pointer',
              fontWeight:'bold',
              "&:hover":{
                color:'red'
              }
            }}
          >
            Taking a Globally Orchestrated Approach to Digital Disruption
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "15px",
              textAlign: "start",
              lineHeight: "21.6px",
              padding:'5px',
            }}
          >
          New technologies such as generative AI, quantum computing, and climate technology require unique but complementary managerial muscles.
          </Typography>
          <div style={{fontSize:'16px', lineHeight:'23.04px'}}>
                <p style={{paddingTop:'40px'}}></p>
          </div>
          <Typography
            variant="p"
            sx={{
              color: "#767676",
              fontSize: "13px",
              textAlign: "start",
              lineHeight: "18.72px",
              padding:'5px',
              cursor:'pointer',
              fontFamily:'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"'
            }}
          >
            Brief
          </Typography>
          </Grid>
          <Grid md={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
              sx={{
                width: "250PX",
                backgroundColor: "#FFF",
                marginTop: "70PX",
                color: "RED",
                fontWeight: "BOLD",
                padding:'15px',
                border: '2px solid  #dcdcdc',
                "&:hover":{
                  backgroundColor:'#981d25',
                  color:'#fff',
                }
              }}
            >
              SEE ALL CLIENT RESULTS
            </Button>
            </Grid>
        </Grid>
    </>
  );
}
