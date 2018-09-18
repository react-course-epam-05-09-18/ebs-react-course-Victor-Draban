import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//pages
import Login from "../pages/login/Login";

//route
import EnsureLoggedInContainer from "./RouteAuth";

import { LOGIN } from "../constants/PathConstants";


export default () =>
    <Router>
        <Switch>
            <Route path = { LOGIN } component = { Login } />
            <EnsureLoggedInContainer />
        </Switch>
    </Router>
