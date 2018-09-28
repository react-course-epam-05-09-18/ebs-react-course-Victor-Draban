import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

//pages
import PageNotFound from "../pages/page_not_found/PageNotFound";

//route
import RouteCourses from "./router-courses/RouteCourses";
import { withRouter } from 'react-router-dom';

import { LOGIN, COURSES_ALL } from "../constants/PathConstants";


class EnsureLoggedInContainer extends Component {
        componentDidMount() {
            // let tmp = localStorage.getItem("loginName");
            if (this.props.loginName === '') {
                this.props.history.push( { LOGIN } );
            }
        }
    
        render() {
            if (this.props.loginName !== "") {
                return <Switch>
                            <Route path = { COURSES_ALL } component = { RouteCourses } />
                            <Route component = { PageNotFound } />
                        </Switch>
            } else {
                return  <Redirect to = { LOGIN }  />
            }
        }
    }

    const mapGlobalStoreStateToProps = (globalStore) => {
        return {
            loginName : globalStore.loginReducer.login
        }
    }
    
    export default withRouter(connect(mapGlobalStoreStateToProps)(EnsureLoggedInContainer));