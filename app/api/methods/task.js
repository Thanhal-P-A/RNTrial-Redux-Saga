import Api from '../index';
import ApiConstants from '../ApiConstants';

export default function requestTask() {
    return Api(ApiConstants.TASK);
}
