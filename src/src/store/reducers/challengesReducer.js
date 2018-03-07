import * as ChallengeActions from "../actions/challengeActions";

const defaultState = {
    challenges: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ChallengeActions.ACTION_CHALLENGE_INITIALIZE:
            return action.payload;
        default:
            return state;
    }
}