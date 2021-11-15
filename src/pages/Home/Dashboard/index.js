import React, { useContext, useState } from 'react'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import { studentsContext } from '../../../context/students'
import StudentList from './StudentList';
import StudentPoint from './StudentPoint';
import StudentPointWithYear from './StudentPointWithYear';
import StudentsWithYear from './StudentsWithYear';


export default function PageDashboard() {
    const { students } = useContext(studentsContext)
    console.log(students);
    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
    const description = ['Xuất Sắc', 'Giỏi', 'Khá', 'Trung Bình', 'Yếu']

    const countStudent = (year, students) => {
        let countStu = 0;
        students.map((student, index) => {
            if (student.schoolYear === year) {
                countStu++;
            }
        })
        return countStu;
    }
    const CountStudentsWithYearAndSex = (year, students, sex) => {
        let sumWithYear = 0;
        students.map((student) => {
            if (student.schoolYear === year && student.gender === sex) {
                sumWithYear++;
            }
        })
        return sumWithYear;
    }
    const countStudentsWithSex = (students, sex) => {
        let sumStudents = 0;
        students.map((student) => {
            if (student.gender === sex) {
                sumStudents++;
            }
        })
        return sumStudents;
    }

    const sumStudentWithYear = [];
    for (let yearIndex in years) {
        sumStudentWithYear.push(countStudent(years[yearIndex], students))
    }

    let countVeryGood = 0;
    const countVeryGoodStudents = (students) => {
        students.map((student) => {
            if (student.point >= 8.0 && student.point <= 8.4) {
                countVeryGood++;
            }
        })
        return countVeryGood;
    }
    let countExcellent = 0;
    const countExcellentStudents = (students) => {
        students.map((student) => {
            if (student.point >= 8.5 && student.point <= 10) {
                countExcellent++;
            }
        })
        return countExcellent;
    }
    let countGood = 0;
    const countGoodStudents = (students) => {
        students.map((student) => {
            if (student.point >= 6.5 && student.point < 8) {
                countGood++;
            }
        })
        return countGood;
    }
    let countAverage = 0;
    const countAverageStudents = (students) => {
        students.map((student) => {
            if (student.point >= 5 && student.point < 6.5) {
                countAverage++;
            }
        })
        return countAverage;
    }
    let countWeak = 0;
    const countWeakStudents = (students) => {
        students.map((student) => {
            if (student.point < 5) {
                countWeak++;
            }
        })
        return countWeak;
    }

    let datapoint = [
        countExcellentStudents(students),
        countVeryGoodStudents(students),
        countGoodStudents(students),
        countAverageStudents(students),
        countWeakStudents(students)
    ]

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
                <StudentPoint
                    description={description}
                    datapoint={datapoint}
                />
            </div>
            <StudentPointWithYear
                years={years}
                sumStudentWithYear={sumStudentWithYear}
                students={students}
            />
        </>
    )
}
