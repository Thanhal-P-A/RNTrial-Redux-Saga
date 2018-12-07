import { put, call } from 'redux-saga/effects';
import * as postActions from '../actions/postActions';
import post from '../api/methods/post';


export default function* postAsync() {
    // yield put(postActions.enableLoader());

    try {
        const response = yield call(post);

        if (response) {
            yield put(postActions.onPostResponse(response.data));
            // yield put(userActions.disableLoader({}));
        }
    } catch (error) {
        yield put(postActions.postFailed({}));
        // yield put(userActions.disableLoader({}));
    }
}