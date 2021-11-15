import React, { useContext } from "react";
import { studentsContext } from "../../../context/students";
import { Bar } from "react-chartjs-2";
export default function PageCharts() {
  const { students } = useContext(studentsContext);
  const years = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];
  const countStudent = (year, students) => {
    let countStu = 0;
    students.forEach((student) => {
      if (student.schoolYear === year) {
        countStu++;
      }
    });
    return countStu;
  };
  const CountStudentsWithYearAndSex = (year, students, sex) => {
    let sumWithYear = 0;
    students.forEach((student) => {
      if (student.schoolYear === year && student.gender === sex) {
        sumWithYear++;
      }
    });
    return sumWithYear;
  };
  const sumStudentWithYear = [];
  for (let yearIndex in years) {
    sumStudentWithYear.push(countStudent(years[yearIndex], students));
  }
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
        height={400}
        width={600}
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
