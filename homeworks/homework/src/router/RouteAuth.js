import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//pages
import PageNotFound from "../pages/page_not_found/PageNotFound";

//route
import RouteCourses from "./router-courses/RouteCourses";
import { withRouter } from 'react-router-dom';

import { LOGIN, COURSES_ALL } from "../constants/PathConstants";


class EnsureLoggedInContainer extends Component {
        componentDidMount() {
            let tmp = localStorage.getItem("loginName");
            if (tmp === '') {
                this.props.history.push( { LOGIN } );
            }
        }
    
        render() {
            if (localStorage.getItem("authmock") === "true") {
                return <Switch>
                            <Route path = { COURSES_ALL } component = { RouteCourses } />
                            <Route component = { PageNotFound } />
                        </Switch>
            } else {
                return  <Redirect to = { LOGIN }  />
            }
        }
    }
    
    export default withRouter(EnsureLoggedInContainer);