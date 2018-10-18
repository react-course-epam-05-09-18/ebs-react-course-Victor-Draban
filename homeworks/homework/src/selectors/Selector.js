import { createSelector } from 'reselect';

const innerCourseSelector = (state) => state.reducerCourses.videocourses;
const innerAuthorSelector = (state) => state.authorReducer.autors;
const innerLoginSelector = (state) => state.loginReducer.login;

export const courseSelector = createSelector(
        innerCourseSelector,
        (items) => items
)

export const loginSelector = createSelector(
        innerLoginSelector,
        (items) => items
)

export const authorSelector = createSelector(
        innerAuthorSelector,
        (items) => items
)
