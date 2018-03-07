import * as ChatActions from '../../actions/legacy/chatActions';

const defaultState = {
    // rehydrated: false,
    // loading: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ChatActions.ACTION_CHAT_INITIALIZE:
            return {
                ...state
            };
        case ChatActions.ACTION_SEND_MESSAGE:
            return {
                ...state
            };
        default:
            return state;
    }
}
