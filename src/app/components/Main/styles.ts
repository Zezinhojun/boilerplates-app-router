"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)({
  backgroundColor: "#06092b",
  color: "#fff",
  width: "100%",
  height: "100%",
  padding: "3rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Logo = styled("img")({
  width: "25rem",
  marginBottom: "2rem",
});

export const Title = styled(Typography)({
  fontSize: "2.5rem",
});

export const Description = styled(Typography)({
  fontSize: "2rem",
  fontWeight: 400,
});

export const Illustration = styled("img")({
  marginTop: "3rem",
  width: "min(30rem, 100%)",
});
