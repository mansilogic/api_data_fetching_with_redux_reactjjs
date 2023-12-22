import * as types from './actionTypes';

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: types.FETCH_POSTS_FAILURE,
  payload: error,
});

export function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchPostsSuccess(json));
      } else {
        dispatch(fetchPostsFailure("Error fetching posts"));
      }
    });
  };
}

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET' })
    .then(response => Promise.all([response, response.json()]));
}

export default fetchPostsWithRedux;