import Api from '../index';
import ApiConstants from '../ApiConstants';

export default function requestUser() {
    return Api(ApiConstants.USER);
}
