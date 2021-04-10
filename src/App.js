import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route path="/sign-up" component={SignUp} />
					{/* Private routes => only available if logged in */}
					<PrivateRoute exact path="/" component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
