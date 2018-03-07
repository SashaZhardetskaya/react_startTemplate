import * as AdminActions from '../actions/adminActions';

const defaultState = {
    adminInfo: {},
    studentProfile: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case AdminActions.ACTION_GET_INFO:
            return {
                ...state,
                ...action.payload
            };
        case AdminActions.ACTION_GET_INFO_ABOUT_STUDENT:
            return {
                ...state,
                studentProfile: action.payload
            };
        default:
            return state;
    }
}