import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LaunchesManagement from "./pages/launches/LaunchesManagement";
import LaunchPage from './pages/launches/LaunchPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={LaunchesManagement}/>
            <Route path="/launch/:id" component={LaunchPage}/>
        </Switch>
    );
}
