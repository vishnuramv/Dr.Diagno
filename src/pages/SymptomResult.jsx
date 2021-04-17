import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import { diseaseDescription } from "../constant";
import { getTopDisease } from "../helper";
import "../styles/SymptomResult.css";
const SymptomResult = ({ location }) => {
  const [topDisease, setTopDisease] = useState({});
  useEffect(() => {
    const disease = getTopDisease(location.state.predictedDisease);
    setTopDisease(disease);
    console.log("diseaseDescription")
    console.log(diseaseDescription)
  }, [location.state.predictedDisease]);
  return (
    <div className="result">
      <div className="result__container">
        <h1>Predition Results</h1>
        <div className="result__graphContainer">
          <Chart predictedDisease={topDisease} />
        </div>
      </div>
    </div>
  );
};

export default SymptomResult;
