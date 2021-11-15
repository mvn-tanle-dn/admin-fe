import "./assets/scss/styles.scss";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./private-route/PrivateRoute";
import {
  PageAccountsManager,
  PageStudentsManager,
  PageTeachersManager,
  PageExamsManager,
} from "./pages/Manager";
import { LayoutHeader } from "./components/layouts/LayoutDefault";
import { LayoutSider } from "./components/layouts/LayoutDefault";
import { PageDashboard, PageCharts } from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AdminProfile from "./pages/AdminProfile";
import { ProviderStudents } from "./context/students";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const { Content } = Layout;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/admin">
          <Layout className="layout-default">
            <LayoutSider collapsed={collapsed} />
            <Layout className="site-layout">
              <LayoutHeader toggle={toggle} />
              <Content className="site-layout-background layout-content">
                <ProviderStudents>
                  <Switch>
                    <Route exact path="/admin" component={PageDashboard} />
                    <Route
                      exact
                      path="/admin/accounts"
                      component={PageAccountsManager}
                    />
                    <Route
                      exact
                      path="/admin/teachers"
                      component={PageTeachersManager}
                    />

                    <Route
                      path="/admin/students"
                      component={PageStudentsManager}
                    />
                    <Route path="/admin/exams" component={PageExamsManager} />
                    <Route path="/admin/charts" component={PageCharts} />
                    <Route path="*/admin/my-profile" component={AdminProfile} />
                    <Route path="/admin/*" component={PageNotFound} />
                  </Switch>
                </ProviderStudents>
              </Content>
            </Layout>
          </Layout>
        </PrivateRoute>
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
