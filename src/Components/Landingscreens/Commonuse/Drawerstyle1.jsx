import { Typography } from "@mui/material";
import styled from "styled-components";

const Typostyle = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontSize: "44px",
  lineHeight: "20.16px",
  textAlign: "left",
  letterSpacing: "normal",
  fontWeight: 'bold',
  cursor: "pointer",
  // margin: "10px",

  "&:hover": {
    color: "red",
    textDecoration: "underline",
  },
}));
export { Typostyle };
