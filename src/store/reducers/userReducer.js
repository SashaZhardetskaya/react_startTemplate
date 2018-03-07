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
        case InfoActions.ACTION_BASIC_INFO_USER_UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
            };
        case InfoActions.ACTION_CONTACTS_INFO_USER_UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    infoContacts: {
                        ...state.user.infoContacts,
                        ...action.payload
                    },
                },
            };
        case InfoActions.ACTION_EDUCATION_INFO_USER_UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    infoEducation: {
                        ...state.user.infoEducation,
                        ...action.payload
                    },
                },
            };
        case InfoActions.ACTION_CIRCUMSTANCES_INFO_USER_UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    infoCircumstances: {
                        ...state.user.infoCircumstances,
                        ...action.payload
                    },
                },
            };
        case InfoActions.ACTION_LSAT_INFO_USER_UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    infoLSAT: {
                        ...state.user.infoLSAT,
                        ...action.payload
                    },
                },
            };
        default:
            return state;
    }
}