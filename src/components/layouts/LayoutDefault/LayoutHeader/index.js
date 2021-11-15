import React, { useContext } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button, Space, message } from "antd";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
import { adminContext } from "../../../../context/auth";

const { Header } = Layout;

export default function LayoutHeader(props) {
  const { adminInfo } = useContext(adminContext);
  const history = useHistory();

  const loggout = () => {
    message.success("Đăng xuất thành công!");
    localStorage.removeItem("isLoggin");
    history.replace("/");
  };
  const menu = (
    <Menu>
      <Menu.Item key="7" icon={<UserOutlined />}>
        <span>
          <NavLink to="/admin/my-profile">Quản lý tài khoản</NavLink>
        </span>
      </Menu.Item>
      <Menu.Item key="8" icon={<LogoutOutlined />}>
        <span onClick={loggout}>Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background pl-20 flex-between">
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger header-menu",
          onClick: props.toggle,
        }
      )}
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button>
            {adminInfo.name} <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Header>
  );
}
