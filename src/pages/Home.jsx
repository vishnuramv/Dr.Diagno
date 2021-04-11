import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getProfile } from "../actions/auth";
import Header from "../components/Header";
import "../styles/Home.css";

const BASEURL = "http://localhost:8000";

export default function Home() {
	const history = useHistory();
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		(async () => {
			const info = await getProfile();
			setUserInfo(info);
		})();
	}, []);

	return (
		<div className="home">
			<Header />
			<div className="home__top">
				<div className="home__userInfo">
					<Avatar src={BASEURL + userInfo.profile_pic} />
					<h1>Hello, {userInfo.username}</h1>
				</div>
				<div className="home__buttons">
					<Button
						className="home__button"
						onClick={() => history.push("/symptom-form")}
					>
						Get Diagnosed
					</Button>
					<Button variant="outlined" className="home__buttonOut">
						Know more about disease
					</Button>
				</div>
			</div>
			<div className="home__bottom">
				<h2>Past Diagnosis</h2>
				<div className="home__pastDiagnosis">
					<h4>You haven't diagnosed yet!</h4>
				</div>
			</div>
		</div>
	);
}
