import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function StudentList(props) {
    const { students, countStudentsWithSex } = props;
    let options = {
        plugins: {
            title: {
                display: true,
                text: 'Danh sách SV toàn trường'
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let datasets = ctx.chart.data.datasets;
                    let percentage = 0;

                    if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                        let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                        percentage = Math.round((value / sum) * 100) + "%";
                        return percentage;
                    } else {
                        return percentage;
                    }
                },
                color: "red"
            }
        }
    };
    return (
        <div>
            <Pie
                data={{
                    labels: ['Nam', 'Nữ'],
                    datasets: [{
                        label: 'Tổng SV toàn trường',
                        data: [countStudentsWithSex(students, 'Nam'), countStudentsWithSex(students, 'Nữ')],
                        backgroundColor: [
                            '#039be5',
                            'rgb(255, 64, 0)',
                        ],
                        borderColor: [
                            '#039be5',
                            'rgb(255, 64, 0)',
                        ],
                    }]
                }}
                height={100}
                width={200}
                options={options}

            />
        </div>
    )
}
