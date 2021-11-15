import { createContext, useState } from "react";

export const studentsContext = createContext({});

export function ProviderStudents({ children }) {
  const [students, setStudents] = useState([
    {
      key: "20181",
      name: "Bùi Tuấn Việt Huy",
      gender: "Nam",
      dob: "1995-12-11",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2018",
      gpa: 9.2,
    },
    {
      key: "20182",
      name: "Tư Mã Ý",
      gender: "Nam",
      dob: "1995-08-11",
      phone: "0917456987",
      department: "Xây dựng",
      schoolYear: "2018",
      gpa: 9.5,
    },
    {
      key: "20183",
      name: "Tào Mạnh Đức",
      gender: "Nam",
      dob: "1995-12-21",
      phone: "0977456107",
      department: "CNTT",
      schoolYear: "2018",
      gpa: 7.3,
    },
    {
      key: "20184",
      name: "Hứa Chử",
      gender: "Nam",
      dob: "1995-02-11",
      phone: "0773456917",
      department: "Cơ điện tử",
      schoolYear: "2018",
      gpa: 6.9,
    },
    {
      key: "20185",
      name: "Trương Liêu",
      gender: "Nam",
      dob: "1995-05-11",
      phone: "0777456982",
      department: "Kinh tế",
      schoolYear: "2018",
      gpa: 8.5,
    },
    {
      key: "20186",
      name: "Lê Bảo Anh",
      gender: "Nữ",
      dob: "1995-12-11",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2018",
      gpa: 7.5,
    },
    {
      key: "20171",
      name: "Lê Minh Nguyệt",
      gender: "Nữ",
      dob: "1996-12-11",
      phone: "0937456987",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 7.8,
    },
    {
      key: "20172",
      name: "Lục Tốn",
      gender: "Nam",
      dob: "1996-11-11",
      phone: "0777433987",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 6.2,
    },
    {
      key: "20173",
      name: "Lê Phương Anh",
      gender: "Nữ",
      dob: "1996-03-11",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 6.5,
    },
    {
      key: "20174",
      name: "Tuân Úc",
      gender: "Nam",
      dob: "1996-12-01",
      phone: "0777456987",
      department: "Tự động hoá",
      schoolYear: "2017",
      gpa: 8.1,
    },
    {
      key: "20175",
      name: "Ronaldo",
      gender: "Nam",
      dob: "1996-04-21",
      phone: "0972456987",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 5.2,
    },
    {
      key: "20176",
      name: "Bùi Anh Tuấn",
      gender: "Nam",
      dob: "1996-05-11",
      phone: "0777456347",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 5.5,
    },
    {
      key: "20177",
      name: "Gia Cát Lượng",
      gender: "Nam",
      dob: "1996-06-13",
      phone: "0777456921",
      department: "Xây dựng",
      schoolYear: "2017",
      gpa: 9.1,
    },
    {
      key: "20178",
      name: "Ngoạ Long",
      dob: "1996-12-12",
      gender: "Nam",
      phone: "0941456972",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 6.2,
    },
    {
      key: "20179",
      name: "Tôn Quyền",
      gender: "Nam",
      dob: "1996-07-14",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2017",
      gpa: 8.8,
    },
    {
      key: "20161",
      name: "Hoàng Cái",
      gender: "Nam",
      dob: "1996-06-11",
      phone: "0933456987",
      department: "CNTT",
      schoolYear: "2016",
      gpa: 7.3,
    },
    {
      key: "20162",
      name: "Lỗ Túc",
      gender: "Nam",
      dob: "1997-05-11",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2016",
      gpa: 8.5,
    },
    {
      key: "20163",
      name: "Trình Phổ",
      gender: "Nam",
      dob: "1997-05-12",
      phone: "0777456987",
      department: "CNTT",
      schoolYear: "2016",
      gpa: 8.2,
    },
    {
      key: "20164",
      name: "Triệu Tử Long",
      gender: "Nam",
      phone: "0777456987",
      dob: "1997-05-21",
      department: "Cơ điện tử",
      schoolYear: "2016",
      gpa: 6.2,
    },
    {
      key: "20165",
      name: "Trương Chiêu",
      gender: "Nam",
      dob: "1997-05-11",
      phone: "0977745627",
      department: "CNTT",
      schoolYear: "2016",
      gpa: 7.4,
    },
    {
      key: "20166",
      name: "Tôn Kiên",
      gender: "Nam",
      dob: "1997-05-11",
      phone: "0927712697",
      department: "CNTT",
      schoolYear: "2016",
      gpa: 7.9,
    },
    {
      key: "20167",
      name: "Trương Mỹ Uyên",
      gender: "Nữ",
      dob: "1997-03-10",
      phone: "0773456987",
      department: "Chế tạo máy",
      schoolYear: "2016",
      gpa: 6.8,
    },
    {
      key: "20168",
      name: "Nguyễn Duy Mạnh",
      gender: "Nam",
      dob: "1997-02-18",
      phone: "0927456987",
      department: "Chế tạo máy",
      schoolYear: "2018",
      gpa: 7.5,
    },
    {
      key: "20169",
      name: "Hà Anh Tuấn",
      gender: "Nam",
      dob: "1997-09-18",
      phone: "0772156987",
      department: "Quản trị kinh doanh",
      schoolYear: "2016",
      gpa: 9.2,
    },
    {
      key: "20151",
      name: "Nguyễn Thị Huyền My",
      gender: "Nữ",
      dob: "1997-03-16",
      phone: "0933456987",
      department: "CNTT",
      schoolYear: "2015",
      gpa: 6.5,
    },
    {
      key: "20152",
      name: "Trấn Thành",
      gender: "Nam",
      dob: "1997-02-21",
      phone: "0947459873",
      department: "CNTT",
      schoolYear: "2015",
      gpa: 8.1,
    },
    {
      key: "20153",
      name: "Nguyễn Minh Hằng",
      gender: "Nữ",
      dob: "1997-11-19",
      phone: "0927456887",
      department: "Kinh tế",
      schoolYear: "2015",
      gpa: 7.5,
    },
    {
      key: "20154",
      name: "Lê Nhật Tân",
      gender: "Nam",
      dob: "1997-05-20",
      phone: "0333456789",
      department: "CNTT",
      schoolYear: "2015",
      gpa: 8.5,
    },
    {
      key: "20155",
      name: "Huỳnh Thị Mỹ Phước",
      gender: "Nữ",
      dob: "1997-04-11",
      phone: "0777456981",
      department: "CNTT",
      schoolYear: "2015",
      gpa: 6.6,
    },
    {
      key: "20156",
      name: "Phan Quang Đạt",
      gender: "Nam",
      dob: "1997-09-19",
      phone: "0777996973",
      department: "Tự động hoá",
      schoolYear: "2015",
      gpa: 7.9,
    },
    {
      key: "20157",
      name: "Lê Anh Đức",
      gender: "Nam",
      dob: "1997-05-11",
      phone: "0241469837",
      department: "Quản trị kinh doanh",
      schoolYear: "2015",
      gpa: 7.2,
    },
    {
      key: "20158",
      name: "Lê Thảo Nguyên",
      gender: "Nữ",
      dob: "1997-05-17",
      phone: "0988321444",
      department: "Kinh tế",
      schoolYear: "2015",
      gpa: 8.2,
    },
  ]);

  const createId = (schoolYear) => {
    let random = Math.floor(Math.random() * 10000);
    let id = schoolYear + random;
    return id;
  };

  return (
    <studentsContext.Provider value={{ students, setStudents, createId }}>
      {children}
    </studentsContext.Provider>
  );
}
