import * as StudentActions from '../actions/studentActions';

const defaultState = {
    location: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case StudentActions.ACTION_STUDENT_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        default:
            return state;
    }
}
