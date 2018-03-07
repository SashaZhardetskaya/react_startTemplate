import * as TasksProgressActions from '../actions/tasksProgressActions';

const defaultState = {
    tasksProgress: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TasksProgressActions.ACTION_GET_TASKS_PROGRESS:
            return {
                ...state,
                tasksProgress: action.payload
            };
        default:
            return state;
    }
}