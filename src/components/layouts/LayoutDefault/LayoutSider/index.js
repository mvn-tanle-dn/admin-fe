import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import examsIcon from "../../../../assets/img/defaultLayout-img/exams-icon.jfif";
import studentIcon from "../../../../assets/img/defaultLayout-img/student-icon.jpg";
import teacherIcon from "../../../../assets/img/defaultLayout-img/teacher-icon.png";
import accountIcon from "../../../../assets/img/defaultLayout-img/account-icon.jpg";
import homeIcon from "../../../../assets/img/defaultLayout-img/home-icon.jpg";
import chartsIcon from "../../../../assets/img/defaultLayout-img/charts-icon.png";

const { Sider } = Layout;
export default function LayoutSider(props) {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <h3 className="menu-title mt-10">Admin Page</h3>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
