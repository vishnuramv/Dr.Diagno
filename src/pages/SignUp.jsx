import React, { useRef, useState } from "react";
import { TextField, Button, ButtonGroup, Avatar } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthTemplate from "../components/AuthTemplate";
import "../styles/login.css";
import { getProfile, signup } from "../actions/auth";
import { Alert } from "@material-ui/lab";
import useAuthContext from "../context/AuthContext";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const { setUserInfo } = useAuthContext();
  const history = useHistory();
  const imageInputRef = useRef(null);

  const handleChange = () => {
    imageInputRef.current.click();
  };

  const token = localStorage.getItem("access-token");
  if (token) return <Redirect to="/" />;

  const handleSubmit = async () => {
    setError("");
    if (!name || !email || !password || !age || !gender || !bloodGroup)
      return setError("All Fields are required");
    const success = await signup({
      name,
      email,
      password,
      age,
      gender,
      bloodGroup,
      image,
    });
    if (success) {
      const info = await getProfile();
      setUserInfo(info);
      history.push("/");
    } else setError("Invalid data");
  };

  return (
    <AuthTemplate
      headerText="Create an account"
      form={
        <form className="login__form">
          {error && <Alert severity="error">{error}</Alert>}
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
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            label="User Name"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
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
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
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
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            label="Blood Group"
            variant="outlined"
          />
          <br />
          <Button onClick={handleSubmit} color="primary" variant="contained">
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
