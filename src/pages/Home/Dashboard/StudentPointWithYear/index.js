import React from "react";
import { Bar } from "react-chartjs-2";

export default function StudentPointWithYear(props) {
  const { sumStudentWithYear, years, students } = props;

  const CountStudentsWithYearAndExc = (year, students) => {
    let sumExcWithYear = 0;
    students.forEach((student) => {
      if (
        student.schoolYear === year &&
        student.gpa >= 8.5 &&
        student.gpa <= 10
      ) {
        sumExcWithYear++;
      }
    });
    return sumExcWithYear;
  };
  const CountStudentsWithYearAndVeryGood = (year, students) => {
    let sumVeryGoodWithYear = 0;
    students.forEach((student) => {
      if (
        student.schoolYear === year &&
        student.gpa >= 8.0 &&
        student.gpa <= 8.4
      ) {
        sumVeryGoodWithYear++;
      }
    });
    return sumVeryGoodWithYear;
  };
  const CountStudentsWithYearAndGood = (year, students) => {
    let sumGoodWithYear = 0;
    students.forEach((student) => {
      if (
        student.schoolYear === year &&
        student.gpa >= 6.5 &&
        student.gpa < 8
      ) {
        sumGoodWithYear++;
      }
    });
    return sumGoodWithYear;
  };
  const CountStudentsWithYearAndAverage = (year, students) => {
    let sumAverageWithYear = 0;
    students.forEach((student) => {
      if (
        student.schoolYear === year &&
        student.gpa >= 8.0 &&
        student.gpa <= 8.4
      ) {
        sumAverageWithYear++;
      }
    });
    return sumAverageWithYear;
  };
  const CountStudentsWithYearAndWeak = (year, students) => {
    let sumWeakWithYear = 0;
    students.forEach((student) => {
      if (
        student.schoolYear === year &&
        student.gpa >= 8.0 &&
        student.gpa <= 8.4
      ) {
        sumWeakWithYear++;
      }
    });
    return sumWeakWithYear;
  };

  const sumExcWithYear = [];
  const sumVeryGoodWithYear = [];
  const sumGoodWithYear = [];
  const sumAverageWithYear = [];
  const sumWeakWithYear = [];

  for (let yearIndex in years) {
    sumExcWithYear.push(
      CountStudentsWithYearAndExc(years[yearIndex], students)
    );
    sumVeryGoodWithYear.push(
      CountStudentsWithYearAndVeryGood(years[yearIndex], students)
    );
    sumGoodWithYear.push(
      CountStudentsWithYearAndGood(years[yearIndex], students)
    );
    sumAverageWithYear.push(
      CountStudentsWithYearAndAverage(years[yearIndex], students)
    );
    sumWeakWithYear.push(
      CountStudentsWithYearAndWeak(years[yearIndex], students)
    );
  }

  return (
    <div className="mt-30">
      <Bar
        data={{
          labels: years,
          datasets: [
            {
              label: "Tổng SV",
              data: sumStudentWithYear,
              backgroundColor: ["#00e676"],
              borderColor: ["#00e676"],
              borderWidth: 1,
            },
            {
              label: "Xuất sắc",
              data: sumExcWithYear,
              backgroundColor: ["#00b0ff"],
              borderColor: ["#00b0ff"],
              borderWidth: 1,
            },
            {
              label: "Giỏi",
              data: sumVeryGoodWithYear,
              backgroundColor: ["#ba68c8"],
              borderColor: ["#ba68c8"],
              borderWidth: 1,
            },
            {
              label: "Khá",
              data: sumGoodWithYear,
              backgroundColor: ["#ff4081"],
              borderColor: ["#ff4081"],
              borderWidth: 1,
            },
            {
              label: "Trung bình",
              data: sumAverageWithYear,
              backgroundColor: ["#bcaaa4"],
              borderColor: ["#bcaaa4"],
              borderWidth: 1,
            },
            {
              label: "Yếu",
              data: sumWeakWithYear,
              backgroundColor: ["#ffff00"],
              borderColor: ["#ffff00"],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
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
              text: "Thống kê xếp loại học sinh theo khóa",
            },
          },
        }}
      />
    </div>
  );
}
