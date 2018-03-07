import * as TestInfoActions from '../actions/testInfoActions';

const defaultState = {
    testInfo: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TestInfoActions.ACTION_GET_TEST_INFO:
            return {
                ...state,
                testInfo: action.payload
            };
        default:
            return state;
    }
}