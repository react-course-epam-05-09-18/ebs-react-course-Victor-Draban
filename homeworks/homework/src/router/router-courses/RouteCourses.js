import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//pages
import Courses from "../../pages/courses/Courses";
import CoursesNew from "../../pages/courses/new/CoursesNew";

import { COURSES_ALL } from "../../constants/PathConstants";

export default class RouteCourses extends Component {
    render() {
        return (
            <Switch>
              <Route path = { `${COURSES_ALL}`} exact component={Courses} />
              {/* <Route path = { `${COURSES_ALL}/:id`} component={CoursesNew} /> */}
              <Route path = { `${COURSES_ALL}/new` } component={CoursesNew} />
            </Switch>
        );
    }
}