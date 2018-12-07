/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestTask() {
    return {
        type: types.TASK_REQUEST
    };
}

export function taskFailed() {
    return {
        type: types.TASK_FAILED
    };
}

export function onTaskResponse(response) {
    return {
        type: types.TASK_RESPONSE,
        response
    };
}
