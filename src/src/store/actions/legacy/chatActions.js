// import sidebar from '../../data/sidebar';

export const ACTION_CHAT_INITIALIZE = 'ACTION_CHAT_INITIALIZE';
export const ACTION_SEND_MESSAGE = 'ACTION_SEND_MESSAGE';


/**
 * Returns initial sidebar tree.
 */
export function getChatHistoryAction() {
    return {
        type: ACTION_CHAT_INITIALIZE,
        // payload: { chat }
    }
}

export function sendChatMessageAction() {
    return {
        type: ACTION_SEND_MESSAGE
    }
}



