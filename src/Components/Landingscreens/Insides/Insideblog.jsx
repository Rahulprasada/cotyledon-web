import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Indusryimg2 from "../../../Assets/img3.jpg";
import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";

export default function Insideblog() {
  return (
    <Myblogbox className="my-3">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Indusryimg2}
            alt="green iguana"
            style={{ width: "100%", height: "300px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "red", fontSize: "16px", fontFamily: "Poppins" }}
            >
              Sustainability
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                fontFamily: "Poppins",
                fontSize: "26px",
                fontWeight: "800",
              }}
            >
              AI and Sustainability: The Power of Integration
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.dark",
                fontFamily: '"Graphik", Helvetica, sans-serif, Lucida Sans Unicode',
                fontSize: "17px",
                textAlign: "justify",
              }}
            >
              Our approach to go-to-market strategy consulting combines our
              sales, marketing, pricing, and product expertise with a rich
              collection of tools and benchmarks. We also address the key
              organizational issues (including salesforce mobilization and
              change management) essential to making sure you achieve and
              sustain great results.
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#c0c0c0",
                  fontFamily: "Poppins",
                  padding: "10px 0",
                }}
              >
                Ceo of cotyledon
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#c0c0c0",
                  fontFamily: "Poppins",
                  padding: "10px 0",
                }}
              >
                <FaRegBookmark />
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Myblogbox>
  );
}
const Myblogbox = styled.div`
  position: relative;
  .subtitle {
    color: red;
  }
`;
