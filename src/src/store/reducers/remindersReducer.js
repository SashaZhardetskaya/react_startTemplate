import * as RemindersAction from '../actions/remindersActions';


const defaultState = {
    reminders: [],
    calendarReminders: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case RemindersAction.ACTION_GET_REMINDERS:
            return {
                ...state,
                reminders: action.payload
            };
        case RemindersAction.ACTION_GET_CALENDAR_REMINDERS:
            return {
                ...state,
                calendarReminders: {
                    ...state.calendarReminders,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}