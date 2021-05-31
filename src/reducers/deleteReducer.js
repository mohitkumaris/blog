const deleteUserReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_USER":
      return action.payload;

    default:
      return state;
  }
};
export default deleteUserReducer;
