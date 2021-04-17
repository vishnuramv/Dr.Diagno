// import { Doughnut } from '@reactchartjs/react-chart.js'
import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { getTopDisease } from '../helper'

const Chart = ({ predictedDisease }) => {
    const [topDisease, setTopDisease] = useState({})

    useEffect(() => {
        const disease = getTopDisease(predictedDisease)
        setTopDisease(disease)
    }, [predictedDisease])
    const data = {
        labels: Object.keys(topDisease),
        datasets: [
            {
                label: '# of Diseases',
                data: Object.values(topDisease),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    const options = {
        legend: {
            display: true,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    const label = data.labels[tooltipItem.index];
                    const value =
                        data.datasets[tooltipItem.datasetIndex]?.data[
                        tooltipItem.index
                        ];
                    return `${label}: ${value}%`;
                },
            },
        },
    };
    return (
        <Doughnut data={data} options={options} width={500} height={100} />
    )
}

export default Chart
