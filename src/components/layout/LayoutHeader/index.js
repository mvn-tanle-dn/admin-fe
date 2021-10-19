import React from 'react'
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

export default function LayoutHeader(props) {

    const handleMenuClick = e => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <span>
                    <NavLink to='/my-profile'>
                        Tài khoản của tôi
                    </NavLink>
                </span>
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
                <span>Đăng xuất</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className="site-layout-background pl-20 flex-between">
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger header-menu',
                onClick: props.toggle,
            })}
            <Space wrap>
                <Dropdown overlay={menu}>
                    <Button>
                        UserName <DownOutlined />
                    </Button>
                </Dropdown>
            </Space>
        </Header>
    )
}
