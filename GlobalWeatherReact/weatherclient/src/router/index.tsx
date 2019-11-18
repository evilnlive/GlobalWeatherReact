import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import * as createHistory from "history";
import Home from '../components/Home';

export const history = createHistory.createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;