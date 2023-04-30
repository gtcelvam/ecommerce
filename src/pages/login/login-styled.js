import { Box, TextField, styled } from "@mui/material";

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: "1rem",
  "*": {
    zIndex: 2,
  },
}));

export const Logo = styled("img")(() => ({
  width: "100px",
  height: "auto",
}));

export const CustomTextField = styled(TextField)(() => ({
  position: "relative",
}));

export const LoginBgImage = styled("img")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "1 !important",
}));
