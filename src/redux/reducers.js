import * as types from './actionTypes';

const initialState = {
  posts: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        
        error: null,
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        
        posts: action.payload,
      };
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
       
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
