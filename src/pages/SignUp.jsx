import React, { useRef, useState } from "react";
import {
	Typography,
	TextField,
	Button,
	ButtonGroup,
	Avatar,
} from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthTemplate from "../components/AuthTemplate";
import "../styles/login.css";
import { signup } from "../actions/auth";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState(null);
	const [gender, setGender] = useState(null);
	const [bloodGroup, setBloodGroup] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState(null);
	const history = useHistory();
	const imageInputRef = useRef(null);

	const handleChange = () => {
		imageInputRef.current.click();
	};

	const token = localStorage.getItem("access-token");
	if (token) return <Redirect to="/" />;

	return (
		<AuthTemplate
			headerText="Create an account"
			form={
				<form className="login__form">
					<Avatar
						src={image && URL.createObjectURL(image)}
						alt="A"
						className="login__avatar"
						onClick={handleChange}
					/>
					<input
						type="file"
						onChange={(e) => setImage(e.target.files[0])}
						ref={imageInputRef}
						style={{ display: "none" }}
					/>
					<TextField
						required
						fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
						label="User Name"
						variant="outlined"
					/>
					<TextField
						required
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						label="Email address"
						variant="outlined"
					/>
					<TextField
						required
						fullWidth
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Password"
						type="password"
						variant="outlined"
					/>
					<TextField
						required
						fullWidth
						value={age}
						onChange={(e) => setAge(e.target.value)}
						label="Age"
						type="number"
						variant="outlined"
					/>
					<ButtonGroup fullWidth>
						<Button
							variant="contained"
							color={gender === "male" && "secondary"}
							onClick={() => setGender("male")}
						>
							Male
						</Button>
						<Button
							variant="contained"
							color={gender === "female" && "secondary"}
							onClick={() => setGender("female")}
						>
							Female
						</Button>
						<Button
							variant="contained"
							color={gender === "other" && "secondary"}
							onClick={() => setGender("other")}
						>
							Other
						</Button>
					</ButtonGroup>
					<TextField
						required
						fullWidth
						value={bloodGroup}
						onChange={(e) => setBloodGroup(e.target.value)}
						label="Blood Group"
						variant="outlined"
					/>
					<br />
					<Button
						onClick={async () => {
							await signup({
								name,
								email,
								password,
								age,
								gender,
								bloodGroup,
								image,
							});
							history.push("/");
						}}
						color="primary"
						variant="contained"
					>
						Sign Up
					</Button>
				</form>
			}
			extra={
				<p>
					Already have an account <Link to="/login">Login</Link>
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
