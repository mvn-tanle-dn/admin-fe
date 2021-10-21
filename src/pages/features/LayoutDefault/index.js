import React, { useState } from 'react'
import { Layout } from 'antd';
import LayoutSider from './LayoutSider';
import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';



export default function LayoutDefault(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="layout-default">
            <LayoutSider collapsed={collapsed}/>
            <Layout className="site-layout">
                <LayoutHeader toggle={toggle}/>
                <LayoutContent/>
            </Layout>
        </Layout>
    )
}
