import _ from "lodash";
const deleteUserReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_USER":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default deleteUserReducer;
