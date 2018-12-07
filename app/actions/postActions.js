/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestPost() {
    return {
        type: types.POST_REQUEST
    };
}

export function postFailed() {
    return {
        type: types.POST_FAILED
    };
}

export function onPostResponse(response) {
    return {
        type: types.POST_RESPONSE,
        response
    };
}
