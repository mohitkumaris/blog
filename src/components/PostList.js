import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUser, deleteUser } from "../actions";
import UserHeader from "../components/UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => this.props.deleteUser(post.userId)}
              className="ui primary"
            >
              Delete
            </button>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostAndUser, deleteUser })(
  PostList
);
