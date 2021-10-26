import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import {
  PageAccountsManager,
  PageTeachersManager,
  PageStudentsManager,
  PageExamsManager,
} from "../../../../pages/Manager";
import { PageDashboard } from "../../../../pages/Home";
import PageCharts from "../../../../pages/Home/Charts";

const { Content } = Layout;

export default function LayoutContent() {
  return (
    <Content className="site-layout-background layout-content">
      <Switch>
        <Route exact path="/admin" component={PageDashboard} />
        <Route path="/admin/accounts" component={PageAccountsManager} />
        <Route path="/admin/teachers" component={PageTeachersManager} />
        <Route path="/admin/students" component={PageStudentsManager} />
        <Route path="/admin/exams" component={PageExamsManager} />
        <Route path="/admin/charts" component={PageCharts} />
      </Switch>
    </Content>
  );
}
