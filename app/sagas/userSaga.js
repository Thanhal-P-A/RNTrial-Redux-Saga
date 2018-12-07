import { put, call } from 'redux-saga/effects';
import * as userActions from '../actions/userActions';
import user from '../api/methods/user';

export default function* userAsync() {

    try {
        const response = yield call(user);
        response.data.avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BKRN_jnkfMegz9PqX3WbCXGvNPHrx38Txs0a1csQZbBR5AcJ0g"
        if (response) {
            yield put(userActions.onUserResponse(response));
        }
    } catch (error) {
        yield put(userActions.userFailed({}));
    }
}