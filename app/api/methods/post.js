import Api from '../index';
import ApiConstants from '../ApiConstants';

export default function requestPost() {
    return Api(ApiConstants.POST);
}