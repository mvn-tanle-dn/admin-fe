import React from 'react'
import { Line } from 'react-chartjs-2'

export default function StudentPoint(props) {
    const { description, datapoint } = props;
    return (
        <div>
            <Line
                data={{
                    labels: description,
                    datasets: [{
                        label: 'Số SV',
                        data: datapoint,
                        fill: false,
                        backgroundColor: ['blue', 'red', 'yellow', 'orange', 'black'],
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }}
                height={150}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Thống kê học lực sinh viên toàn trường'
                        }
                    }
                }}
            />
        </div>
    )
}
