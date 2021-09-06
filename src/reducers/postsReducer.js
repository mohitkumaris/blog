import _ from "lodash";

const initialState = [];
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "DELETE_USER":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default postsReducer;
