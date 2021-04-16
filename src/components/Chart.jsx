// import { Doughnut } from '@reactchartjs/react-chart.js'
import { useEffect, useState } from 'react'
import { defaults, Doughnut } from 'react-chartjs-2'

const Chart = ({ predictedDisease }) => {
    const [topDisease, setTopDisease] = useState({})

    useEffect(() => {
        const temp = {}
        const values = Object.values(predictedDisease);
        const keys = Object.keys(predictedDisease);

        // values.map((value, index) => 
        //     if(value >= 0.1) temp[keys[index]] = value
        // )
        let count = 0;
        for (let i = 0; i < values.length; i++) {
            if (values[i] >= 0.1) temp[keys[i]] = values[i]
            count += values[i]
        }
        console.log(count)
        setTopDisease(temp)
    }, [predictedDisease])
    console.log(topDisease)
    const data = {
        labels: Object.keys(topDisease),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(topDisease),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <Doughnut data={data} options={defaults} />
        // <h1>Hello</h1>
    )
}

export default Chart
