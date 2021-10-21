import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import LayoutContent from '../LayoutContent';
import { NavLink } from 'react-router-dom';
import LayoutHeader from '../LayoutHeader';
import examsIcon from '../../../assets/img/exams-icon.jfif'
import studentIcon from '../../../assets/img/student-icon.jpg'
import teacherIcon from '../../../assets/img/teacher-icon.png'
import accountIcon from '../../../assets/img/account-icon.jpg'


const { Sider } = Layout;

export default function LayoutDefault(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="layout-default">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item className="menu-title">
                        Tests Manager
                    </Menu.Item>
                    <Menu.Item key="1">
                        <span className="style-icon pr-10">
                            <img src={accountIcon} />
                        </span>
                        <NavLink to="/accounts">Account</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span className="style-icon pr-10">
                            <img src={teacherIcon} />
                        </span>
                        <NavLink to="/teachers">
                            Teachers
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <span className="style-icon pr-10">
                            <img src={studentIcon} />
                        </span>
                        <NavLink to="/students">
                            Students
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <span className="style-icon pr-10">
                            <img src={examsIcon} />
                        </span>
                        <NavLink to="/exams">
                            Exams
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <LayoutHeader toggle={toggle} />
                <LayoutContent />
            </Layout>
        </Layout>
    )
}
