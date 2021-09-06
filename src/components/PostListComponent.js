import React, { useEffect } from "react";
import { fetchPostAndUser, deleteUser } from "../actions";
import { useSelector, connect, useDispatch } from "react-redux";
import UserHeader from "../components/UserHeader";

const PostListComponent = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>

          <UserHeader userId={post.userId} />
          <button onClick={() => dispatch(deleteUser(post.userId))}>
            Click to Dispatch
          </button>
        </div>
      );
    });
  };
  useEffect(() => {
    props.fetchPostAndUser();
  }, [props]);
  return <div className="ui relaxed divided list"> {renderList()}</div>;
};

export default connect(null, { fetchPostAndUser })(PostListComponent);
