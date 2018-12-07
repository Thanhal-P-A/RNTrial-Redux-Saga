
import * as userReducer from './userReducer';
import * as taskReducer from './taskReducer';
import * as postReducer from './postReducer';
export default Object.assign(
    userReducer,
    taskReducer,
    postReducer);