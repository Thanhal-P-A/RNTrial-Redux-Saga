import { put, call } from 'redux-saga/effects';
import * as taskActions from '../actions/taskActions';
import task from '../api/methods/task';


export default function* taskAsync() {
    // yield put(taskActions.enableLoader());

    try {
        const response = yield call(task);

        if (response) {
            yield put(taskActions.onTaskResponse(response.data));
            // yield put(userActions.disableLoader({}));
        }
    } catch (error) {
        yield put(taskActions.taskFailed({}));
        // yield put(userActions.disableLoader({}));
    }
}
