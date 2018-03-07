import {combineReducers} from "redux";
import app from './appReducer';
import auth from './authReducer';
import chat from './legacy/chatReducer';
import sidebar from './sidebarReducer';
import challenges from './challengesReducer';
import students from './studentsReduser';
import notifications from './notificationsReducer';
import tasksProgress from './tasksProgressReducer';
import reminders from './remindersReducer';
import testsScore from './testsScoreReducer';
import courses from './coursesReducer';
import studentLocation from './studentReducer';
import quizQuestions from './quizQuestionsReducer';
import chapterPart from './chapterPartReducer';
import instructors from './instructorsReducer';
import studentsPeople from './studentsPeopleReducer';
const reducers = combineReducers({
    // test: combineReducers({
    //
    // }),
    app,
    auth,
    chat,
    sidebar,
    challenges,
    students,
    notifications,
    tasksProgress,
    reminders,
    testsScore,
    studentLocation,
    quizQuestions,
    chapterPart,
    courses,
    instructors,
    studentsPeople
});

export default reducers;