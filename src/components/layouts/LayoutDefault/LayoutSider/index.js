import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FaHome } from "react-icons/fa";
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item className="menu-title">Tests Manager</Menu.Item>
        <Menu.Item key="1">
          <span className="style-icon-img pr-10">
            <img src={homeIcon} />
          </span>
          <NavLink to="/home">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <span className="style-icon-img pr-10">
            <img src={accountIcon} />
          </span>
          <NavLink to="/accounts">Account</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="style-icon-img pr-10">
            <img src={teacherIcon} />
          </span>
          <NavLink to="/teachers">Teachers</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <span className="style-icon-img pr-10">
            <img src={studentIcon} />
          </span>
          <NavLink to="/students">Students</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <span className="style-icon-img pr-10">
            <img src={examsIcon} />
          </span>
          <NavLink to="/exams">Exams</NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <span className="style-icon-img pr-10">
            <img src={chartsIcon} />
          </span>
          <NavLink to="/charts">Charts</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
