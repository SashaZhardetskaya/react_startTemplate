export const ACTION_STUDENT_LOCATION = "ACTION_STUDENT_LOCATION";

/**
 * action for get user location and user ip
 */
export function getLocationStudent() {
    return dispatch => {
        fetch('http://freegeoip.net/json/')
            .then(response => {
                if (response.ok)
                    return response.json();
                response.text().then(data => {
                    const {status, statusText} = response;
                    const message = `HTTP status ${status} (${statusText}): ${data}`;
                    throw new Error(message);
                });
            }).then(data => {
            return dispatch({
                type: ACTION_STUDENT_LOCATION,
                payload: {
                    ...data
                }
            });
        }).catch(error => console.error(error));
    }
}

