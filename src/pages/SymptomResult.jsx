import Chart from "../components/Chart";
import "../styles/SymptomResult.css";
const SymptomResult = ({ location }) => {
  return (
    <div className="result">
      <h1>Predition Results</h1>
      <div className="result__graphContainer">
        <Chart predictedDisease={location.state.predictedDisease} />
      </div>
    </div>
  );
};

export default SymptomResult;
