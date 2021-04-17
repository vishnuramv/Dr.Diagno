import { Avatar, Button, IconButton, makeStyles } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getProfile, refresh } from "../actions/auth";
import { getPreviousPrediction } from "../actions/predictions";
import Header from "../components/Header";
import { BASEURL } from "../constant";
import { getTopDisease } from "../helper";
import "../styles/Home.css";

const useStyles = makeStyles((theme) => ({
	icon: {
		color: "#1E9437",
		marginLeft: "5px",
		fontSize: 30,
	},
}));

export default function Home() {
	const classes = useStyles();
	const history = useHistory();
	const [userInfo, setUserInfo] = useState({});
	const [previousPredictions, setPreviousPredictions] = useState();

	useEffect(() => {
		(async () => {
			await refresh();
			const info = await getProfile();
			setUserInfo(info);
			const prevsPrediction = await getPreviousPrediction();
			setPreviousPredictions(prevsPrediction)
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
					{/* <Button variant="outlined" className="home__buttonOut">
						Know more about disease
					</Button> */}
				</div>
			</div>
			<div className="home__bottom">
				<h2>Past Diagnosis</h2>
				<div className="home__pastDiagnosis">
					{
						previousPredictions ? (
							<div className="home__predictionContainer">
								{
									previousPredictions.map((previousPrediction, index) => {
										const topDisease = getTopDisease(previousPrediction.predictedDisease);
										return (
											<div key={index} className="home__prediction">
												<div>
													<h4>{new Date(previousPrediction.date).toString().slice(0, 21)}</h4>
													<p>
														{
															Object.keys(topDisease).map((disease, ind) => (
																<span key={ind}>{disease}, </span>
															))
														}
													</p>
												</div>
												<IconButton onClick={() => history.push('/symptom-result', { predictedDisease: previousPrediction.predictedDisease })}><ArrowForward className={classes.icon} /></IconButton>
											</div>
										)
									})
								}
							</div>
						) : (
							<h4>You haven't diagnosed yet!</h4>
						)
					}
				</div>
			</div>
		</div>
	);
}
