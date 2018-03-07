import {combineReducers} from "redux";
import app from './appReducer';
import auth from './authReducer';
import chat from './legacy/chatReducer';
import sidebar from './sidebarReducer';
import video from './videoReducer';
import challenges from './challengesReducer';
import students from './studentsReduser';
import notifications from './notificationsReducer';
import tasksProgress from './tasksProgressReducer';
import videoQuestionSummery from './videoQuestionSummeryReducer';
import lectureObjectives from './lectureObjectivesReducer';
import reminders from './remindersReducer';
import testsScore from './testsScoreReducer';
import courses from './coursesReducer';
import testInfo from './testInfoReducer';
import studentLocation from './studentReducer';
import quizQuestions from './quizQuestionsReducer';
import videoQuestions from './videoQuestionsReducer';
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
    video,
    challenges,
    students,
    notifications,
    tasksProgress,
    videoQuestionSummery,
    lectureObjectives,
    reminders,
    testsScore,
    testInfo,
    studentLocation,
    quizQuestions,
    videoQuestions,
    chapterPart,
    courses,
    instructors,
    studentsPeople
});

export default reducers;