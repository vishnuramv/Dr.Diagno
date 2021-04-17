import { Card } from "@material-ui/core";
import Chart from "../components/Chart";
import "../styles/SymptomResult.css";
const SymptomResult = ({ location }) => {
  return (
    <div className="result">
      <div className="result__container">
        <h1>Predition Results</h1>
        <div className="result__graphContainer">
          <Chart predictedDisease={location.state.predictedDisease} />
        </div>
      </div>
    </div>
  );
};

export default SymptomResult;
