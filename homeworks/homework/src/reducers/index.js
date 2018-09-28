import { combineReducers } from 'redux';

import { authorReducer } from './authorReducer';
import { reducerCourses } from './courseReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
        authorReducer,
        reducerCourses,
        loginReducer
});

export default rootReducer;
