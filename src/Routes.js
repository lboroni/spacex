import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LaunchesManagement from "./pages/launches/LaunchesManagement";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LaunchesManagement}/>
            </Switch>
        </BrowserRouter>
    );
}
