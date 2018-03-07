import * as NotificationsActions from '../actions/notificationsActions';

const defaultState = {
    notifications: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case NotificationsActions.ACTION_GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            };
        default:
            return state;
    }
}