import { Button, Checkbox, FormControlLabel, FormGroup, TextField, withStyles } from "@material-ui/core"
import { green } from "@material-ui/core/colors";
import { Cancel } from "@material-ui/icons";
import { useState } from "react"
import { useHistory } from "react-router";
import { submitSymptoms } from "../actions/predictions";
import { symptomsList } from "../constant";
import '../styles/SymptomsForm.css'

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SymptomsForm = () => {
    const [symptoms, setSymptoms] = useState(symptomsList);
    const [symptomSearch, setSymptomSearch] = useState('');
    const history = useHistory();

    const handleChange = (value, symptom) => {
        const symptomsCopy = [...symptoms];
        const index = symptomsCopy.findIndex(currentValue => currentValue === symptom);
        symptomsCopy[index].value = value ? 1 : 0;
        setSymptoms(symptomsCopy);
    };

    const unselectSymptom = (symptom) => {
        const symptomsCopy = [...symptoms];
        const index = symptomsCopy.findIndex(currentValue => currentValue === symptom);
        symptomsCopy[index].value = 0;
        setSymptoms(symptomsCopy);
    };

    return (
        <div className="symptomsForm">
            <h1>Fill this out!</h1>
            <div className="inputs">
                <TextField
                    className="input"
                    label="No. of days you had these symptoms?"
                    variant="outlined"
                />
                <TextField
                    className="input"
                    label="Your body temprature?"
                    variant="outlined"
                />
            </div>
            <div className="selectedSymptoms">
                <div className="symptomsSelect">
                    {
                        symptoms.map((symptom, index) => symptom.value === 1 && (
                            <p key={index}>
                                <span>{symptom.name}</span>
                                <Cancel style={{ color: green[600], cursor: "pointer" }} fontSize="small" onClick={() => unselectSymptom(symptom)} />
                            </p>
                        ))
                    }
                </div>
                <TextField
                    className="inputSymptoms"
                    label="Search symptoms"
                    value={symptomSearch}
                    onChange={(e) => setSymptomSearch(e.target.value)}
                />
            </div>
            <div className="checkbox">
                <FormGroup>
                    {
                        symptoms?.filter((symptom) =>
                            symptomSearch
                                ? symptom.lable
                                    .toLowerCase()
                                    .includes(symptomSearch.toLowerCase())
                                : true
                        ).map((symptom, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <GreenCheckbox
                                        checked={symptom.value === 0 ? false : true}
                                        onChange={(e) => handleChange(e.target.checked, symptom)}
                                        name={symptom.name}
                                    // color="primary"
                                    />
                                }
                                label={symptom.lable}
                            />
                        ))
                    }
                </FormGroup>
            </div>
            <div className="submit">
                <Button
                    className="submitButton"
                    onClick={async () => {
                        const predictedDisease = await submitSymptoms(symptoms)
                        history.push('/symptom-result', { predictedDisease: predictedDisease })
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default SymptomsForm


