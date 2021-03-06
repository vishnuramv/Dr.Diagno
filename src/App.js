import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SymptomsForm from "./pages/SymptomsForm";
import SymptomResult from "./pages/SymptomResult";
import useAuthContext from "./context/AuthContext";
import { Backdrop, CircularProgress } from "@material-ui/core";

function App() {
  const { loading } = useAuthContext();

  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          {/* Private routes => only available if logged in */}
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/symptom-form" component={SymptomsForm} />
          <PrivateRoute
            exact
            path="/symptom-result"
            component={SymptomResult}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
