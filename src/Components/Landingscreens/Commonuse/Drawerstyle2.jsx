import { List } from "@mui/material";
import styled from "styled-components";

const Leftbar2 = styled(List)(() => ({
  fontFamily: 'Graphik, Helvetica, sans-serif, "Lucida Sans Unicode"',
  fontSize: "14px",
  lineHeight: "20.16px",
  textAlign: "left",
  letterSpacing: "normal",
  fontWeight: "500",
  cursor: "pointer",
  "&:hover": { color: "red", textDecoration:'underline' },
}));

export { Leftbar2 };
