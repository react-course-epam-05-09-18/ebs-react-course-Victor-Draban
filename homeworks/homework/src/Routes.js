import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/login/Login";
import Courses from "./containers/courses/Courses";
import CoursesNew from "./containers/courses/new/CoursesNew";

export default () =>
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/courses/new" exact component={CoursesNew} />
    <Redirect from="/fallback-url" to="/courses" />
    <Route component={Login} />
  </Switch>;