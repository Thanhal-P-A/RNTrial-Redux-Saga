import createReducer from "../lib/createReducer";
import * as actionTypes from "../actions/types";

const initialState = {
  first_name: "",
  avatar: ""
};

export const userReducer = createReducer(initialState, {
  [actionTypes.USER_REQUEST](state) {
    return { ...state };
  },
  [actionTypes.USER_RESPONSE](state, action) {
    return {
      ...state,
      first_name: action.response.data.first_name,
      avatar: action.response.data.avatar
    };
  },
  [actionTypes.USER_FAILED](state) {
    return {
      ...state,
      first_name: "",
      avatar: ""
    };
  }
});
