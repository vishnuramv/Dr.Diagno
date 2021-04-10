import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuthTemplate from "../components/AuthTemplate";
import "../styles/login.css";
import { login } from "../actions/auth";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthTemplate
			headerText="Login to your account"
			form={
				<form className="login__form">
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
						onClick={() => login(email, password)}
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
