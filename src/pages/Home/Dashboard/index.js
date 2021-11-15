import React, { useContext } from "react";
import { studentsContext } from "../../../context/students";
import StudentList from "./StudentList";
import StudentPoint from "./StudentPoint";
import StudentPointWithYear from "./StudentPointWithYear";
import StudentsWithYear from "./StudentsWithYear";

export default function PageDashboard() {
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
  const description = ["Xuất Sắc", "Giỏi", "Khá", "Trung Bình", "Yếu"];

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
  const countStudentsWithSex = (students, sex) => {
    let sumStudents = 0;
    students.forEach((student) => {
      if (student.gender === sex) {
        sumStudents++;
      }
    });
    return sumStudents;
  };

  const sumStudentWithYear = [];
  for (let yearIndex in years) {
    sumStudentWithYear.push(countStudent(years[yearIndex], students));
  }

  let countVeryGood = 0;
  const countVeryGoodStudents = (students) => {
    students.forEach((student) => {
      if (student.gpa >= 8.0 && student.gpa <= 8.4) {
        countVeryGood++;
      }
    });
    return countVeryGood;
  };
  let countExcellent = 0;
  const countExcellentStudents = (students) => {
    students.forEach((student) => {
      if (student.gpa >= 8.5 && student.gpa <= 10) {
        countExcellent++;
      }
    });
    return countExcellent;
  };
  let countGood = 0;
  const countGoodStudents = (students) => {
    students.forEach((student) => {
      if (student.gpa >= 6.5 && student.gpa < 8) {
        countGood++;
      }
    });
    return countGood;
  };
  let countAverage = 0;
  const countAverageStudents = (students) => {
    students.forEach((student) => {
      if (student.gpa >= 5 && student.gpa < 6.5) {
        countAverage++;
      }
    });
    return countAverage;
  };
  let countWeak = 0;
  const countWeakStudents = (students) => {
    students.forEach((student) => {
      if (student.gpa < 5) {
        countWeak++;
      }
    });
    return countWeak;
  };

  let datapoint = [
    countExcellentStudents(students),
    countVeryGoodStudents(students),
    countGoodStudents(students),
    countAverageStudents(students),
    countWeakStudents(students),
  ];

  return (
    <>
      <div className="flex-between flex-wrap">
        <StudentsWithYear
          students={students}
          years={years}
          countStudent={countStudent}
          sumStudentWithYear={sumStudentWithYear}
          CountStudentsWithYearAndSex={CountStudentsWithYearAndSex}
        />
        <StudentList
          students={students}
          countStudentsWithSex={countStudentsWithSex}
        />
        <StudentPoint description={description} datapoint={datapoint} />
      </div>
      <StudentPointWithYear
        years={years}
        sumStudentWithYear={sumStudentWithYear}
        students={students}
      />
    </>
  );
}
