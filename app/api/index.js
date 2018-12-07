import ApiConstants from './ApiConstants';
export default function api(path) {
    return fetch(ApiConstants.BASE_URL + path)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}