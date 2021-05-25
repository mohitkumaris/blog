import jsonplaceholder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("posts");
  return dispatch({
    type: "FETCH_POSTS",
    payload: response,
  });
};
