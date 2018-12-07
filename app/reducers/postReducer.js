import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/types';

const initialState = {
    post: []
};

export const postReducer = createReducer(initialState, {
    [actionTypes.POST_REQUEST](state) {
        return { ...state };
    },
    [actionTypes.POST_RESPONSE](state, action) {
        let post = state;
        post=action.response;
        for(let i=post.length;i>1;i--){
            for(let j=0;j<i-1;j++){
           if(post[j].order>post[j+1].order){
               let temp = post[j+1];
            post[j+1]=post[j];
            post[j]=temp;
           }
        }}
        return {
            ...state,
            post
        };
    },
    [actionTypes.POST_FAILED](state) {
        return {
            ...state,
            post: []
        };
    }
});
