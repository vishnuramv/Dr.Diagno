import React, { useState } from "react";
import { Typography, TextField, Button, Divider } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthTemplate from "../components/AuthTemplate";
import "../styles/login.css";
import { login } from "../actions/auth";
// import GoogleLogin from "react-google-login";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
					<Divider />
					<TextField
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						label="Email address"
						variant="outlined"
					/>
					<TextField
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Password"
						type="password"
						variant="outlined"
					/>
					<br />
					<Button
						onClick={async () => {
							await login(email, password);
							history.push("/");
						}}
						color="primary"
						variant="contained"
					>
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
					<Typography variant="h4">Lorem, ipsum dolor.</Typography>
					<p>
						Good health is not something we can buy. However, it can
						be an extremely valuable savings account.
					</p>
				</>
			}
		/>
	);
}
