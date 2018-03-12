import {combineReducers} from "redux";
import app from './appReducer';
import auth from './authReducer';
import sidebar from './sidebarReducer';
import studentLocation from './studentReducer';
const reducers = combineReducers({
    // test: combineReducers({
    //
    // }),
    app,
    auth,
    sidebar,
    studentLocation,
});

export default reducers;