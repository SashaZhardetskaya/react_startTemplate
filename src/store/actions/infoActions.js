// import * as net from "../../utils/network";

export const ACTION_BASIC_INFO_USER_UPDATE = 'ACTION_BASIC_INFO_USER_UPDATE';
export const ACTION_CONTACTS_INFO_USER_UPDATE = 'ACTION_CONTACTS_INFO_USER_UPDATE';
export const ACTION_EDUCATION_INFO_USER_UPDATE = 'ACTION_EDUCATION_INFO_USER_UPDATE';
export const ACTION_CIRCUMSTANCES_INFO_USER_UPDATE = 'ACTION_CIRCUMSTANCES_INFO_USER_UPDATE';
export const ACTION_LSAT_INFO_USER_UPDATE = 'ACTION_LSAT_INFO_USER_UPDATE';

// function actionBasicUserInfoLoaded(basicUserInfo) {
//     return {
//         type: ACTION_GET_INFO,
//         payload: basicUserInfo
//     };
// }
//
// CREATORS
// export function updateBasicUserInfo() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionBasicUserInfoLoaded(data.filter((basicUserInfo) => basicUserInfo === core))); //or any other relevant condition
//             });
//     };
// }

export function updateBasicUserInfo(updates) {
    return {
        type: ACTION_BASIC_INFO_USER_UPDATE,
        payload: updates
    };
}

export function updateContactsUserInfo(updates) {
    return {
        type: ACTION_CONTACTS_INFO_USER_UPDATE,
        payload: updates
    };
}

export function updateEducationUserInfo(updates) {
    return {
        type: ACTION_EDUCATION_INFO_USER_UPDATE,
        payload: updates
    };
}

export function updateCircumstancesUserInfo(updates) {
    return {
        type: ACTION_CIRCUMSTANCES_INFO_USER_UPDATE,
        payload: updates
    };
}

export function updateLsatUserInfo(updates) {
    return {
        type: ACTION_LSAT_INFO_USER_UPDATE,
        payload: updates
    };
}