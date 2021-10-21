import React from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PageAccountsManager,PageTeachersManager,PageStudentsManager,PageExamsManager } from '../../../Account';

const { Content } = Layout;

export default function LayoutContent() {
    return (
        <Content className="site-layout-background layout-content">
            <Switch>
                <Route exact path='/accounts' component={PageAccountsManager} />
                <Route exact path='/teachers' component={PageTeachersManager}/>
                <Route exact path='/students' component={PageStudentsManager}/>
                <Route exact path='/exams' component={PageExamsManager}/>
            </Switch>
            <Redirect to='/accounts'/>
        </Content>
    )
}
