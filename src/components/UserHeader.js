import { connect } from "react-redux";

const UserHeader = (props) => {
  const { user } = props;
  if (!user) {
    return null;
  }
  return <div className="header">{user.name}</div>;
};
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const user = state.users.find((user) => user.id === ownProps.userId);
  return { user };
};
export default connect(mapStateToProps)(UserHeader);
