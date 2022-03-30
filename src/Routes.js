import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LaunchesManagement from "./pages/launches/LaunchesManagement";
import LaunchDetail from './pages/launches/LaunchDetail';
import PageNotFound from './pages/pageNotFound/PageNotFound';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={LaunchesManagement}/>
            <Route path="/launch/:id" component={LaunchDetail}/>
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
}
