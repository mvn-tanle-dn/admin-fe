import React from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PageAccountsManager,PageTeachersManager,PageStudentsManager,PageExamsManager } from '../../../../pages/Account';
import { PageDashboard } from '../../../../pages/features/Home';
import PageCharts from '../../../../pages/features/Home/Charts';

const { Content } = Layout;

export default function LayoutContent() {
    return (
        <Content className="site-layout-background layout-content">
            <Switch>
                <Route exact path='/home' component={PageDashboard} />
                <Route exact path='/accounts' component={PageAccountsManager} />
                <Route exact path='/teachers' component={PageTeachersManager}/>
                <Route exact path='/students' component={PageStudentsManager}/>
                <Route exact path='/exams' component={PageExamsManager}/>
                <Route exact path='/charts' component={PageCharts}/>
            </Switch>
            <Redirect to='/home'/>
        </Content>
    )
}
