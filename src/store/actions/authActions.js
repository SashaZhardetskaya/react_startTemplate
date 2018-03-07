import * as AppActions from "./appActions";
import user from '../../data/user';

export const ACTION_AUTH_LOGIN_REQUEST = 'ACTION_AUTH_LOGIN_REQUEST';
export const ACTION_AUTH_LOGIN_SUCCESS = 'ACTION_AUTH_LOGIN_SUCCESS';
export const ACTION_AUTH_LOGIN_FAILURE = 'ACTION_AUTH_LOGIN_FAILURE';
export const ACTION_AUTH_LOGOUT = 'ACTION_AUTH_LOGOUT';
/**
 * Validates username and password.
 *
 * @param username user name.
 * @param password user password.
 * @returns {boolean} true if right otherwise false.
 */
function validateCredentials(username, password) {
    return (username === 'admin' && password === 'admin');
}

/**
 *
 */
function loginUserRequest() {
    return {type: ACTION_AUTH_LOGIN_REQUEST};
}

/**
 *
 * @param user authenticated user.
 */
function loginUserSuccess(user) {
    return {
        type: ACTION_AUTH_LOGIN_SUCCESS,
        payload: {user}
    };
}

/**
 *
 * @param errorMessage description of error.
 */
function loginUserFailure(errorMessage) {
    return {
        type: ACTION_AUTH_LOGIN_FAILURE,
        payload: {errorMessage}
    };
}

/**
 * Try authenticate user with credential.
 *
 * @param username
 * @param password
 */
export function loginUser(username, password) {

    return (dispatch) => {
        dispatch(loginUserRequest());
        dispatch(AppActions.setLoadingOverlayVisible());

        setTimeout(() => {
            if (validateCredentials(username, password)) {
                dispatch(loginUserSuccess(user));
            } else {
                dispatch(loginUserFailure("Username or password is invalid."));
            }

            dispatch(AppActions.setLoadingOverlayInvisible());
        }, 1500);
    };
}

/**
 * Return action to logout user.
 */
export function logoutUserAction() {
    return {type: ACTION_AUTH_LOGOUT};
}


