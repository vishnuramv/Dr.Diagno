import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthTemplate from "../components/AuthTemplate";
import "../styles/login.css";
import { getProfile, login } from "../actions/auth";
import { Alert } from "@material-ui/lab";
import useAuthContext from "../context/AuthContext";
// import GoogleLogin from "react-google-login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUserInfo } = useAuthContext();
  const history = useHistory();

  // const onSuccess = (response) => {
  // 	console.log(response);
  // 	googleLogin(response.accessToken);
  // };
  // const onFailure = (error) => {
  // 	console.error(error);
  // };

  const token = localStorage.getItem("access-token");
  if (token) return <Redirect to="/" />;

  const handleSubmit = async () => {
    setError(false);
    if (!email || !password) return setError(true);
    const success = await login(email, password);
    if (success) {
      const info = await getProfile();
      setUserInfo(info);
      history.push("/");
    } else setError(true);
  };

  return (
    <AuthTemplate
      headerText="Login to your account"
      form={
        <form className="login__form">
          {/* <GoogleLogin
						clientId="821186524454-sou2ak19hb1ca9v5ie1qtvvk2j713vsg.apps.googleusercontent.com"
						buttonText="Continue With Google"
						onSuccess={onSuccess}
						onFailure={onFailure}
					/> */}
          {/* <Divider /> */}
          {error && <Alert severity="error">Invalid Credentials</Alert>}
          <TextField
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            label="Email address"
            variant="outlined"
          />
          <TextField
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            label="Password"
            type="password"
            variant="outlined"
          />
          <br />
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Login
          </Button>
        </form>
      }
      extra={
        <p>
          Don't have an account <Link to="/sign-up">Sign Up</Link>
        </p>
      }
      imageText={
        <>
          {/* <Typography variant="h4">Lorem, ipsum dolor.</Typography> */}
          <p>
            Health is a state of complete harmony of the body, mind and spirit.
            When one is free from physical disabilities and mental distractions,
            the gates of the soul open.
          </p>
        </>
      }
    />
  );
}
