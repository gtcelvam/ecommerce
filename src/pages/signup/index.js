import React, { useState } from "react";
import {
  CustomTextField,
  SignUpContainer,
  Logo,
  CustomCircularProgress,
  SignUpBgImage,
} from "./signup-styled";
import { Button, Typography } from "@mui/material";
import { handleRequest } from "../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import CART_IMAGE from "../../assests/images/cart.png";
import BG_IMAGE from "../../assests/images/auth_bg.jpg";

const SignUp = () => {
  //constructor
  const navigate = useNavigate();

  //state values
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //constants
  const isName = Boolean(userData.name.length);
  const isEmail = Boolean(userData.email.length);
  const isPassword = Boolean(userData.password.length);
  const isConfirm = Boolean(userData.confirm.length);

  //functions
  const handleData = (e, type = "name") => {
    let data;
    if (type === "name") {
      data = {
        ...userData,
        name: e.target.value,
      };
    } else if (type === "email") {
      data = {
        ...userData,
        email: e.target.value,
      };
    } else if (type === "password") {
      data = {
        ...userData,
        password: e.target.value,
      };
    } else {
      data = {
        ...userData,
        confirm: e.target.value,
      };
    }
    setUserData(data);
  };

  console.log("user data : ", userData);

  const handleSubmit = async () => {
    const emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isName)
      setIsError({ ...isError, name: "username should not be empty" });
    else if (!isEmail)
      setIsError({ ...isError, email: "Email should not be empty" });
    else if (!emailReg.test(userData.email)) {
      setIsError({ ...isError, email: "Please enter a valid email" });
    } else if (!isPassword)
      setIsError({ ...isError, password: "password should not be empty" });
    else if (userData.password !== userData.confirm)
      setIsError({ ...isError, confirm: "password is not matching" });
    else {
      let data = { ...userData };
      setIsLoading(true);
      let result = await handleRequest("POST", data, "api/auth/register");
      if (result.data) {
        setIsLoading(false);
        navigate("/login");
      }
    }
  };

  return (
    <SignUpContainer>
      <Logo src={CART_IMAGE} alt="logo" />
      <Typography>SignUp Form</Typography>
      <CustomTextField
        label="username"
        value={userData.name}
        onChange={(e) => handleData(e)}
        helperText={isName && Boolean(userData.name) ? "" : isError.name}
      />
      <CustomTextField
        label="email"
        value={userData.email}
        onChange={(e) => handleData(e, "email")}
        helperText={isEmail && Boolean(userData.name) ? "" : isError.email}
      />
      <CustomTextField
        label="password"
        value={userData.password}
        onChange={(e) => handleData(e, "password")}
        helperText={
          isPassword && Boolean(userData.password) ? "" : isError.password
        }
      />
      <CustomTextField
        label="confirm password"
        value={userData.confirm}
        onChange={(e) => handleData(e, "confirm")}
        helperText={
          userData.password === userData.confirm &&
          Boolean(userData.confirm.length)
            ? ""
            : isError.confirm
        }
      />
      <Button
        style={{ minWidth: "150px" }}
        variant="contained"
        onClick={handleSubmit}
      >
        {isLoading ? <CustomCircularProgress color="inherit" /> : "Register"}
      </Button>
      <p>
        Already have an account ? <Link to={"/login"}>Login</Link>{" "}
      </p>
      <SignUpBgImage src={BG_IMAGE} alt="bg-image" />
    </SignUpContainer>
  );
};

export default SignUp;
