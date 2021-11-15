import React from "react";
import { Bar } from "react-chartjs-2";

export default function StudentsWithYear(props) {
  const { students, years, CountStudentsWithYearAndSex, sumStudentWithYear } =
    props;

  const sumMaleWithYear = [];
  for (let yearIndex in years) {
    sumMaleWithYear.push(
      CountStudentsWithYearAndSex(years[yearIndex], students, "Nam")
    );
  }

  const sumFemaleWithYear = [];
  for (let index in years) {
    sumFemaleWithYear.push(sumStudentWithYear[index] - sumMaleWithYear[index]);
  }
  return (
    <div>
      <Bar
        data={{
          labels: years,
          datasets: [
            {
              label: "Tổng SV",
              data: sumStudentWithYear,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
            {
              label: "Nam",
              data: sumMaleWithYear,
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 0.2)"],
              borderWidth: 1,
            },
            {
              label: "Nữ",
              data: sumFemaleWithYear,
              backgroundColor: ["rgba(255, 206, 86, 0.2)"],
              borderColor: ["rgba(255, 206, 86, 0.2)"],
              borderWidth: 1,
            },
          ],
        }}
        height={150}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Danh sách SV theo khóa",
            },
          },
        }}
      />
    </div>
  );
}
