import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import examsIcon from "../../../../assets/img/defaultLayout-img/exams.png";
import studentIcon from "../../../../assets/img/defaultLayout-img/male-student.png";
import teacherIcon from "../../../../assets/img/defaultLayout-img/teacher.png";
import accountIcon from "../../../../assets/img/defaultLayout-img/accounts.png";
import homeIcon from "../../../../assets/img/defaultLayout-img/dashboard.png";
import chartsIcon from "../../../../assets/img/defaultLayout-img/bar-chart.png";

const { Sider } = Layout;

const paths = [
  { key: "1", label: "Dashboard", path: "/admin" },
  { key: "2", label: "Accounts", path: "/admin/accounts" },
  { key: "3", label: "Teachers", path: "/admin/teachers" },
  { key: "4", label: "Students", path: "/admin/students" },
  { key: "5", label: "Exams", path: "/admin/exams" },
  { key: "6", label: "Charts", path: "/admin/charts" },
  { key: "7", label: "Charts", path: "/admin/my-profile" },
];

export default function LayoutSider(props) {
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(
    paths.find((_item) => location.pathname === _item.path).key
  );

  useEffect(() => {
    let pathSelected = paths.find((_item) => _item.path === location.pathname);
    console.log(pathSelected + "hahah");
    setSelectedKey(pathSelected.key);
  }, [location]);
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <h3 className="menu-title mt-10">Admin Page</h3>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKey}
        // onClick={(path) => console.log(path.key)}
      >
        <Menu.Item
          key="1"
          className="style-icon-img"
          icon={<img src={homeIcon} alt="Home Icon" />}
        >
          <NavLink to="/admin">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item
          key="2"
          className="style-icon-img"
          icon={<img src={accountIcon} alt="Account Icon" />}
        >
          <NavLink to="/admin/accounts">Account</NavLink>
        </Menu.Item>
        <Menu.Item
          key="3"
          className="style-icon-img"
          icon={<img src={teacherIcon} alt="Teacher Icon" />}
        >
          <NavLink to="/admin/teachers">Teachers</NavLink>
        </Menu.Item>
        <Menu.Item
          key="4"
          className="style-icon-img"
          icon={<img src={studentIcon} alt="Student Icon" />}
        >
          <NavLink to="/admin/students">Students</NavLink>
        </Menu.Item>
        <Menu.Item
          key="5"
          className="style-icon-img"
          icon={<img src={examsIcon} alt="Exams Icon" />}
        >
          <NavLink to="/admin/exams">Exams</NavLink>
        </Menu.Item>
        <Menu.Item
          key="6"
          className="style-icon-img"
          icon={<img src={chartsIcon} alt="Chart Icon" />}
        >
          <NavLink to="/admin/charts">Charts</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
