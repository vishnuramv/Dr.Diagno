import { Button, Checkbox, FormControlLabel, FormGroup, TextField, withStyles } from "@material-ui/core"
import { green } from "@material-ui/core/colors";
import { Cancel } from "@material-ui/icons";
import { useState } from "react"
import { useHistory } from "react-router";
import { submitSymptoms } from "../actions/predictions";
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
    const [symptoms, setSymptoms] = useState([
        {
            name: 'abdominal_pain',
            lable: 'Abdominal pain',
            value: 0
        },
        {
            name: 'abnormal_menstruation',
            lable: 'Abnormal menstruation',
            value: 0
        },
        {
            name: 'acidity',
            lable: 'Acidity',
            value: 0
        },
        {
            name: 'acute_liver_failure',
            lable: 'acute liver failure',
            value: 0
        },
        {
            name: 'altered_sensorium',
            lable: "Altered sensorium",
            value: 0
        },
        {
            name: 'anxiety',
            lable: "Anxiety",
            value: 0
        },
        {
            name: 'back_pain',
            lable: "Back pain",
            value: 0
        },
        {
            name: 'belly_pain',
            lable: "Belly pain",
            value: 0
        },
        {
            name: 'blackheads',
            lable: "Blackheads",
            value: 0
        },
        {
            name: 'bladder_discomfort',
            lable: "bladder discomfort",
            value: 0
        },
        {
            name: 'blister',
            lable: "blister",
            value: 0
        },
        {
            name: 'blood_in_sputum',
            lable: "blood in sputum",
            value: 0
        },
        {
            name: 'bloody_stool',
            lable: "bloody stool",
            value: 0
        },
        {
            name: 'blurred_and_distorted_vision',
            lable: "blurred and distorted vision",
            value: 0
        },
        {
            name: 'breathlessness',
            lable: "breathlessness",
            value: 0
        },
        {
            name: 'brittle_nails',
            lable: "brittle nails",
            value: 0
        },
        {
            name: 'bruising',
            lable: "bruising",
            value: 0
        },
        {
            name: 'burning_micturition',
            lable: "burning micturition",
            value: 0
        },
        {
            name: 'chest_pain',
            lable: "chest pain",
            value: 0
        },
        {
            name: 'chills',
            lable: "chills",
            value: 0
        },
        {
            name: 'cold_hands_and_feets',
            lable: "cold hands and feets",
            value: 0
        },
        {
            name: 'coma',
            lable: "coma",
            value: 0
        },
        {
            name: 'congestion',
            lable: "congestion",
            value: 0
        },
        {
            name: 'constipation',
            lable: "constipation",
            value: 0
        },
        {
            name: 'continuous_feel_of_urine',
            lable: "continuous feel of urine",
            value: 0
        },
        {
            name: 'continuous_sneezing',
            lable: "continuous sneezing",
            value: 0
        },
        {
            name: 'cough',
            lable: "cough",
            value: 0
        },
        {
            name: 'cramps',
            lable: "cramps",
            value: 0
        },
        {
            name: 'dark_urine',
            lable: "dark urine",
            value: 0
        },
        {
            name: 'dehydration',
            lable: "dehydration",
            value: 0
        },
        {
            name: 'depression',
            lable: "depression",
            value: 0
        },
        {
            name: 'diarrhoea',
            lable: "diarrhoea",
            value: 0
        },
        {
            name: 'dischromic_patches',
            lable: "dischromic patches",
            value: 0
        },
        {
            name: 'distention_of_abdomen',
            lable: "distention of abdomen",
            value: 0
        },
        {
            name: 'dizziness',
            lable: "dizziness",
            value: 0
        },
        {
            name: 'drying_and_tingling_lips',
            lable: "drying and tingling lips",
            value: 0
        },
        {
            name: 'enlarged_thyroid',
            lable: "enlarged thyroid",
            value: 0
        },
        {
            name: 'excessive_hunger',
            lable: "excessive hunger",
            value: 0
        },
        {
            name: 'extra_marital_contacts',
            lable: "extra marital contacts",
            value: 0
        },
        {
            name: 'family_history',
            lable: "family history",
            value: 0
        },
        {
            name: 'fast_heart_rate',
            lable: "fast heart rate",
            value: 0
        },
        {
            name: 'fatigue',
            lable: "fatigue",
            value: 0
        },
        {
            name: 'fluid_overload',
            lable: "fluid overload",
            value: 0
        },
        {
            name: 'foul_smell_of_urine',
            lable: "foul smell of urine",
            value: 0
        },
        {
            name: 'headache',
            lable: "headache",
            value: 0
        },
        {
            name: 'high_fever',
            lable: "high fever",
            value: 0
        },
        {
            name: 'hip_joint_pain',
            lable: "hip joint pain",
            value: 0
        },
        {
            name: 'history_of_alcohol_consumption',
            lable: "history of alcohol consumption",
            value: 0
        },
        {
            name: 'increased_appetite',
            lable: "increased appetite",
            value: 0
        },
        {
            name: 'indigestion',
            lable: "indigestion",
            value: 0
        },
        {
            name: 'inflammatory_nails',
            lable: "inflammatory nails",
            value: 0
        },
        {
            name: 'internal_itching',
            lable: "internal itching",
            value: 0
        },
        {
            name: 'irregular_sugar_level',
            lable: "irregular sugar level",
            value: 0
        },
        {
            name: 'irritability',
            lable: "irritability",
            value: 0
        },
        {
            name: 'irritation_in_anus',
            lable: "irritation in anus",
            value: 0
        },
        {
            name: 'joint_pain',
            lable: "joint pain",
            value: 0
        },
        {
            name: 'knee_pain',
            lable: "knee pain",
            value: 0
        },
        {
            name: 'lack_of_concentration',
            lable: "lack of oncentration",
            value: 0
        },
        {
            name: 'lethargy',
            lable: "lethargy",
            value: 0
        },
        {
            name: 'loss_of_appetite',
            lable: "loss of appetite",
            value: 0
        },
        {
            name: 'loss_of_balance',
            lable: "loss of balance",
            value: 0
        },
        {
            name: 'loss_of_smell',
            lable: "loss of smell",
            value: 0
        },
        {
            name: 'malaise',
            lable: "malaise",
            value: 0
        },
        {
            name: 'mild_fever',
            lable: "mild fever",
            value: 0
        },
        {
            name: 'mood_swings',
            lable: "mood swings",
            value: 0
        },
        {
            name: 'movement_stiffness',
            lable: "movement stiffness",
            value: 0
        },
        {
            name: 'mucoid_sputum',
            lable: "mucoid sputum",
            value: 0
        },
        {
            name: 'muscle_pain',
            lable: "muscle pain",
            value: 0
        },
        {
            name: 'muscle_wasting',
            lable: "muscle wasting",
            value: 0
        },
        {
            name: 'muscle_weakness',
            lable: "muscle weakness",
            value: 0
        },
        {
            name: 'nausea',
            lable: "nausea",
            value: 0
        },
        {
            name: 'neck_pain',
            lable: "neck pain",
            value: 0
        },
        {
            name: 'nodal_skin_eruptions',
            lable: "nodal skin eruptions",
            value: 0
        },
        {
            name: 'obesity',
            lable: "obesity",
            value: 0
        },
        {
            name: 'pain_behind_the_eyes',
            lable: "pain behind the eyes",
            value: 0
        },
        {
            name: 'pain_during_bowel_movements',
            lable: "pain during bowel movements",
            value: 0
        },
        {
            name: 'pain_in_anal_region',
            lable: "pain in anal region",
            value: 0
        },
        {
            name: 'painful_walking',
            lable: "painful walking",
            value: 0
        },
        {
            name: 'palpitations',
            lable: "palpitations",
            value: 0
        },
        {
            name: 'passage_of_gases',
            lable: "passage of gases",
            value: 0
        },
        {
            name: 'patches_in_throat',
            lable: "patches in throat",
            value: 0
        },
        {
            name: 'phlegm',
            lable: "phlegm",
            value: 0
        },
        {
            name: 'polyuria',
            lable: "polyuria",
            value: 0
        },
        {
            name: 'prominent_veins_on_calf',
            lable: "prominent veins on calf",
            value: 0
        },
        {
            name: 'puffy_face_and_eyes',
            lable: "puffy face and eyes",
            value: 0
        },
        {
            name: 'pus_filled_pimples',
            lable: "pus filled pimples",
            value: 0
        },
        {
            name: 'receiving_blood_transfusion',
            lable: "receiving blood transfusion",
            value: 0
        },
        {
            name: 'receiving_unsterile_injections',
            lable: "receiving unsterile injections",
            value: 0
        },
        {
            name: 'red_sore_around_nose',
            lable: "red sore around nose",
            value: 0
        },
        {
            name: 'red_spots_over_body',
            lable: "red spots over body",
            value: 0
        },
        {
            name: 'redness_of_eyes',
            lable: "redness of eyes",
            value: 0
        },
        {
            name: 'restlessness',
            lable: "restlessness",
            value: 0
        },
        {
            name: 'runny_nose',
            lable: "runny nose",
            value: 0
        },
        {
            name: 'rusty_sputum',
            lable: "rusty sputum",
            value: 0
        },
        {
            name: 'scurring',
            lable: "scurring",
            value: 0
        },
        {
            name: 'shivering',
            lable: "shivering",
            value: 0
        },
        {
            name: 'silver_like_dusting',
            lable: "silver like dusting",
            value: 0
        },
        {
            name: 'sinus_pressure',
            lable: "sinus pressure",
            value: 0
        },
        {
            name: 'skin_peeling',
            lable: "skin peeling",
            value: 0
        },
        {
            name: 'skin_rash',
            lable: "skin rash",
            value: 0
        },
        {
            name: 'slurred_speech',
            lable: "slurred speech",
            value: 0
        },
        {
            name: 'small_dents_in_nails',
            lable: "small dents in nails",
            value: 0
        },
        {
            name: 'spinning_movements',
            lable: "spinning movements",
            value: 0
        },
        {
            name: 'spotting_urination',
            lable: "spotting urination",
            value: 0
        },
        {
            name: 'stiff_neck',
            lable: "stiff neck",
            value: 0
        },
        {
            name: 'stomach_bleeding',
            lable: "stomach bleeding",
            value: 0
        },
        {
            name: 'stomach_pain',
            lable: "stomach pain",
            value: 0
        },
        {
            name: 'sunken_eyes',
            lable: "sunken eyes",
            value: 0
        },
        {
            name: 'sweating',
            lable: "sweating",
            value: 0
        },
        {
            name: 'swelled_lymph_nodes',
            lable: "swelled lymph nodes",
            value: 0
        },
        {
            name: 'swelling_joints',
            lable: "swelling joints",
            value: 0
        },
        {
            name: 'swelling_of_stomach',
            lable: "swelling of stomach",
            value: 0
        },
        {
            name: 'swollen_blood_vessels',
            lable: "swollen blood vessels",
            value: 0
        },
        {
            name: 'swollen_extremeties',
            lable: "swollen extremeties",
            value: 0
        },
        {
            name: 'swollen_legs',
            lable: "swollen legs",
            value: 0
        },
        {
            name: 'throat_irritation',
            lable: "throat irritation",
            value: 0
        },
        {
            name: 'toxic_look_(typhos)',
            lable: "toxic look (typhos)",
            value: 0
        },
        {
            name: 'ulcers_on_tongue',
            lable: "ulcers on tongue",
            value: 0
        },
        {
            name: 'unsteadiness',
            lable: "unsteadiness",
            value: 0
        },
        {
            name: 'visual_disturbances',
            lable: "visual disturbances",
            value: 0
        },
        {
            name: 'vomiting',
            lable: "vomiting",
            value: 0
        },
        {
            name: 'watering_from_eyes',
            lable: "watering from eyes",
            value: 0
        },
        {
            name: 'weakness_in_limbs',
            lable: "weakness in limbs",
            value: 0
        },
        {
            name: 'weakness_of_one_body_side',
            lable: "weakness of one body side",
            value: 0
        },
        {
            name: 'weight_gain',
            lable: "weight gain",
            value: 0
        },
        {
            name: 'weight_loss',
            lable: "weight loss",
            value: 0
        },
        {
            name: 'yellow_crust_ooze',
            lable: "yellow crust ooze",
            value: 0
        },
        {
            name: 'yellow_urine',
            lable: "yellow urine",
            value: 0
        },
        {
            name: 'yellowing_of_eyes',
            lable: "yellowing of eyes",
            value: 0
        },
        {
            name: 'yellowish_skin',
            lable: "yellowish skin",
            value: 0
        },
        {
            name: 'itching',
            lable: "itching",
            value: 0
        }
    ]);
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
    
    // function getCookie(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }



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
                        symptoms.map(symptom => symptom.value === 1 && (
                            <p>
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


