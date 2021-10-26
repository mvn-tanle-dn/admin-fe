import "./assets/scss/styles.scss";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./private-route/PrivateRoute";
import {
  PageAccountsManager,
  PageStudentsManager,
  PageTeachersManager,
  PageExamsManager,
} from "./pages/Manager";
import LayoutHeader from "./components/layouts/LayoutDefault/LayoutHeader";
import LayoutSider from "./components/layouts/LayoutDefault/LayoutSider";
import { PageDashboard, PageCharts } from "./pages/Home";

function App() {
  return (
    <div className="App layout-default">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/admin">
        <LayoutSider />
        <LayoutHeader />
        <Switch>
          <Route exact path="/admin" component={PageDashboard} />
          <Route path="/admin/accounts" component={PageAccountsManager} />
          <Route path="/admin/teachers" component={PageTeachersManager} />
          <Route path="/admin/students" component={PageStudentsManager} />
          <Route path="/admin/exams" component={PageExamsManager} />
          <Route path="/admin/charts" component={PageCharts} />
        </Switch>
      </PrivateRoute>
    </div>
  );
}

export default App;
