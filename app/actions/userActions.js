
import * as types from './types';

export function requestUser() {
    return {
        type: types.USER_REQUEST
    };
}

export function userFailed() {
    return {
        type: types.USER_FAILED
    };
}

export function onUserResponse(response) {
    return {
        type: types.USER_RESPONSE,
        response
    };
}
