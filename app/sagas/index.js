import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import userSaga from './userSaga';
import tasksSaga from './tasksSaga';
import postSaga from './postSaga';

export default function* watch() {
    yield all([takeLatest(types.USER_REQUEST, userSaga)]);
    yield all([takeLatest(types.TASK_REQUEST, tasksSaga)]);
    yield all([takeLatest(types.POST_REQUEST, postSaga)]);
}