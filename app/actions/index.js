// export action creators
// import * as loginActions from './loginActions';
// import * as navigationActions from './navigationActions';

// export const ActionCreators = Object.assign(
//     {},
//     loginActions,
//     navigationActions
// );

import * as userActions from './userActions';
import * as taskActions from './taskActions';
import * as postActions from './postActions';
// import sampleActions from './sampleActions';

export const ActionCreators = Object.assign(
    {},
    userActions,
    taskActions,
    postActions,
    // sampleActions
);