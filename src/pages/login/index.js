import React, { useState } from "react";
import {
  CustomTextField,
  LoginBgImage,
  LoginContainer,
  Logo,
} from "./login-styled";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CART_IMAGE from "../../assests/images/cart.png";
import BG_IMAGE from "../../assests/images/auth_bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCall";

const Login = () => {
  //constructor
  const dispatch = useDispatch();
  const { isFetching: isLoading, error } = useSelector((state) => state.user);

  //state values
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [isError, setIsError] = useState({ name: "", password: "" });

  //constants
  const isName = Boolean(userData.name.length);
  const isPassword = Boolean(userData.password.length);

  //functions
  const handleData = (e, type = "name") => {
    let data;
    if (type === "name") {
      data = {
        ...userData,
        name: e.target.value,
      };
    } else {
      data = {
        ...userData,
        password: e.target.value,
      };
    }
    setUserData(data);
  };

  const handleSubmit = async () => {
    if (!isName)
      setIsError({ ...isError, name: "username should not be empty" });
    else if (!isPassword)
      setIsError({ ...isError, password: "password should not be empty" });
    else {
      login(dispatch, userData);
    }
  };

  return (
    <>
      <LoginContainer>
        <Logo src={CART_IMAGE} alt="logo" />
        <Typography>Login Form</Typography>
        <CustomTextField
          label="username"
          value={userData.name}
          onChange={(e) => handleData(e)}
          helperText={isName && Boolean(userData.name) ? "" : isError.name}
        />
        <CustomTextField
          label="password"
          value={userData.password}
          onChange={(e) => handleData(e, "password")}
          helperText={
            isPassword && Boolean(userData.password) ? "" : isError.password
          }
        />
        <Button
          variant="contained"
          style={{ width: "100px", height: "auto" }}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <CircularProgress
              style={{ width: "20px", height: "auto" }}
              color="inherit"
            />
          ) : (
            "Login"
          )}
        </Button>
        <p>
          New user ? Create account <Link to={"/register"}>here</Link>{" "}
        </p>
        <LoginBgImage src={BG_IMAGE} alt="bg-image" />
      </LoginContainer>
    </>
  );
};

export default Login;
