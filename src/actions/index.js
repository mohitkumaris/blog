import jsonPlaceholder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // console.log(getState());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  userId.forEach((id) => dispatch(fetchUser(id)));
};
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  //_fetchUser(id, dispatch);
  const response = await jsonPlaceholder.get(`/users/${id}`);
  //console.log(getState());
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const deleteUser = (id) => async (dispatch, getState) => {
  console.log(getState());
  const upDatedPosts = getState().posts.filter((post) => post.userId !== id);
  dispatch({ type: "DELETE_USER", payload: upDatedPosts });
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
