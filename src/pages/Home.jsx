import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getProfile, refresh } from "../actions/auth";
import { getPreviousPrediction } from "../actions/predictions";
import Header from "../components/Header";
import { BASEURL } from "../constant";
import "../styles/Home.css";


export default function Home() {
	const history = useHistory();
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		(async () => {
			await refresh();
			const info = await getProfile();
			setUserInfo(info);
			await getPreviousPrediction();
		})();
	}, []);

	return (
		<div className="home">
			<Header imgURL={BASEURL + userInfo.profile_pic} username={userInfo.username} />
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
