import { BASEURL } from "../constant";

export const getPreviousPrediction = async () => {
    const token = localStorage.getItem("access-token");

    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
        }
    };
    const response = await fetch(BASEURL + "/predict-disease/", reqOptions);
    const data = await response.json();
    console.log(data);
    return data.previousPredictions
}

export const submitSymptoms = async (symptoms) => {
    const encodedSymptom = symptoms.map(symptom => symptom.value)
    const predictionDate = new Date().toDateString();
    console.log(encodedSymptom)
    const token = localStorage.getItem("access-token");

    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ symptoms: encodedSymptom, predictionDate: predictionDate }),
    };
    const response = await fetch(BASEURL + "/predict-disease/", reqOptions);
    const data = await response.json();
    console.log(data.predictedDisease);
    return data.predictedDisease
}