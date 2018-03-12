import {combineReducers} from "redux";
import app from './appReducer';
import auth from './authReducer';
import sidebar from './sidebarReducer';
import notifications from './notificationsReducer';
import tasksProgress from './tasksProgressReducer';
import reminders from './remindersReducer';
import studentLocation from './studentReducer';
const reducers = combineReducers({
    // test: combineReducers({
    //
    // }),
    app,
    auth,
    sidebar,
    notifications,
    tasksProgress,
    reminders,
    studentLocation,
});

export default reducers;