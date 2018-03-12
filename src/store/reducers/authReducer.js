import * as AuthActions from '../actions/authActions';

const defaultState = {
    authorized: false,
    user: null,
    errorMessage: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case AuthActions.ACTION_AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                authorized: true,
                errorMessage: null,
                ...action.payload
            };
        case AuthActions.ACTION_AUTH_LOGOUT:
            return {
                ...state,
                authorized: false
            };
        case AuthActions.ACTION_AUTH_LOGIN_FAILURE:
            return {
                ...state,
                authorized: false,
                ...action.payload
            };
        default:
            return state;
    }
}