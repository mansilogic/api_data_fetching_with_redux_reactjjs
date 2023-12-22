import React from "react";
import { connect } from "react-redux";
import { fetchPostsWithRedux } from "../redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPostId: null,
    };
  }

  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }

  handlePostClick = (postId) => {
    this.setState({ selectedPostId: postId });
  };

  render() {
    const { selectedPostId } = this.state;
    const { posts } = this.props;
    const selectedPost = posts.find((post) => post.id === selectedPostId);

    return (
      <div>
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id} onClick={() => this.handlePostClick(post.id)}>
                <strong>ID:</strong> {post.id} - {post.title}
              </li>
            ))}
        </ul>

        {selectedPost && (
          <div>
            <h1>{selectedPost.id}</h1>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

let Container = connect(mapStateToProps, { fetchPostsWithRedux })(App);

export default Container;
