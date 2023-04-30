import { Box, CircularProgress, TextField, styled } from "@mui/material";

export const SignUpContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  "*": {
    zIndex: 2,
  },
}));

export const Logo = styled("img")(() => ({
  width: "100px",
  height: "auto",
}));

export const CustomTextField = styled(TextField)(() => ({}));

export const CustomCircularProgress = styled(CircularProgress)(() => ({
  width: "auto !important",
  height: "30px !important",
  svg: {
    height: "30px",
  },
}));

export const SignUpBgImage = styled("img")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "1 !important",
}));
