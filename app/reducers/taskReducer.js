import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/types';

const initialState = {
    tasks: []
};

export const taskReducer = createReducer(initialState, {
    [actionTypes.TASK_REQUEST](state) {
        return { ...state };
    },
    [actionTypes.TASK_RESPONSE](state, action) {
        return {
            ...state,
            tasks: action.response
        };
    },
    [actionTypes.TASK_FAILED](state) {
        return {
            ...state,
            tasks: []
        };
    }
});
