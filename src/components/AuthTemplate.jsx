import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HeaderLogo from "../components/HeaderLogo";
import "../styles/login.css";

export default function AuthTemplate({ headerText, form, extra, imageText }) {
	return (
		<Grid container>
			<Grid item xs={12} md={4} className="full__height p-5">
				<HeaderLogo />
				<Typography variant="h4">{headerText}</Typography>
				<form className="login__form">{form}</form>
				<p className="mt-5 grey">{extra}</p>
			</Grid>
			<Grid item xs={12} md={8} className="full__height login__image p-5">
				{imageText}
			</Grid>
		</Grid>
	);
}
