import React from 'react';
import Home from './pages/home';

import NavBar from './components/navbar';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import history from './history';

export const Routes = () => {

    return (
        <div>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
};