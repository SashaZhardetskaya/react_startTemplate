import challenges from '../../data/challenges';
// import * as net from "../../utils/network";

export const ACTION_CHALLENGE_INITIALIZE = 'ACTION_CHALLENGE_INITIALIZE';

// function actionChallengesInitialInfoLoaded(adminInfo) {
//     return {
//         type: ACTION_CHALLENGE_INITIALIZE,
//         payload: { challenges }
//     };
// }
//
// CREATORS
// export function getChallengesInitialAction() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionChallengesInitialInfoLoaded(data.filter((challenges) => challenges === core))); //or any other relevant condition
//             });
//     };
// }

/**
 * Returns initial challenges.
 */
export function getChallengesInitialAction() {
    return {
        type: ACTION_CHALLENGE_INITIALIZE,
        payload: { challenges }
    }
}
