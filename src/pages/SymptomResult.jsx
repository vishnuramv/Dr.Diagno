// import { useEffect } from "react"
import Chart from '../components/Chart'
const SymptomResult = ({ location }) => {
    // useEffect(() => {
    // }, [location])
    console.log("object");
    console.log(location.state.predictedDisease);
    return (
        <div className="result">
            <h1>Predition Results</h1>
            <Chart predictedDisease={location.state.predictedDisease} />
        </div>
    )
}

export default SymptomResult
