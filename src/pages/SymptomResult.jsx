import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import { diseaseDescription } from "../constant";
import { getTopDisease } from "../helper";
import "../styles/SymptomResult.css";
import Header from "../components/Header";
import { ArrowForward } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#1E9437",
    marginLeft: "5px",
    fontSize: 30,
  },
}));

const SymptomResult = ({ location }) => {
  const classes = useStyles();
  const [topDisease, setTopDisease] = useState({});
  const history = useHistory();

  // const [disease, setDisease] = useState([]);
  useEffect(() => {
    const disease = getTopDisease(location.state.predictedDisease);
    setTopDisease(disease);
    console.log("diseaseDescription")
    console.log(diseaseDescription)
    // setDisease(Object.keys(topDisease))
  }, [location.state.predictedDisease]);
  return (
    <div className="result">
      <Header />
      <div className="result__container">
        <h1>Prediction Results</h1>
        <div className="result__graphContainer">
          <Chart predictedDisease={topDisease} />
        </div>
      </div>
      <div className="result__diseaseContainer">
        {
          Object.keys(topDisease).map((disease, index) => (
            <div className="result__diseaseCard" key={index}>
              <h2>{disease}</h2>
              <h4>Description:</h4>
              <p>{diseaseDescription[disease]?.description}</p>
              <h4>Precautions</h4>
              {/* <ul> */}
              {
                diseaseDescription[disease]?.precaution.map((precaution, ind) => (
                  <p className="result__precaution" key={ind}>{precaution}</p>
                ))
              }
              {/* </ul> */}
            </div>
          ))
        }
      </div>
      <button onClick={() => history.push('/')} className="result__button" >Home <ArrowForward className={classes.icon} /> </button>
    </div>
  );
};

export default SymptomResult;
