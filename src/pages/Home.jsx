import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import '../styles/Home.css'
export default function Home() {
	const history = useHistory();
	return (
		<div className="home" >
			<Header />
			<div className="home__top">
				<div className="home__userInfo">
					<Avatar>V</Avatar>
					<h1>Hello, Vishnu</h1>
				</div>
				<div className="home__buttons">
					<Button className="home__button" onClick={() => history.push('/symptom-form')}>Get Diagnosed</Button>
					<Button variant="outlined" className="home__buttonOut">Know more about disease</Button>
				</div>
			</div>
			<div className="home__bottom">
				<h2>Past Disgnosis</h2>
				<div className="home__pastDiagnosis">
					<h4>You haven't diagnosed yet!</h4>
				</div>
			</div>
		</div>
	);
}
