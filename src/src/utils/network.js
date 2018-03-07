import fetch from "isomorphic-fetch";

/**
 * Process GET request with authorization token.
 *
 * @param state application state object.
 * @param url request address.
 * @returns {*} request promise.
 */
export function aGet(url) {
    // console.log('GET', url);
    // const {value} = state.core.token;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Authorization': value
        }
    }).then(resp => resp.json());
}

/**
 * Process POST request with authorization token.
 *
 * @param state application state object.
 * @param url request address.
 * @param data request body data.
 * @returns {*} request promise.
 */
export function aPost(url, data) {
    // console.log('POST', url, data, state.core.token);
    // const {value} = state.core.token;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Authorization': value
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

/**
 * Process PUT request with authorization token.
 *
 * @param state application state object.
 * @param url request address.
 * @param data request body data.
 * @returns {*} request promise.
 */
export function aPut(url, data) {
    // console.log('PUT', url, data, state.core.token);
    // const {value} = state.core.token;

    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Authorization': value
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

/**
 * Process DELETE request with authorization token.
 *
 * @param state application state object.
 * @param url request address.
 * @returns {*} request promise.
 */
export function aDelete(url) {
    // console.log('DELETE', url, state.core.token);
    // const {value} = state.core.token;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Authorization': value
        }
    }).then(resp => resp.json());
}