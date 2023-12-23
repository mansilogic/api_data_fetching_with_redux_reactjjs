import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsWithRedux } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App({ posts, fetchPostsWithRedux }) {
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetchPostsWithRedux();
  }, [fetchPostsWithRedux]);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {posts &&
          posts.map((post) => (
            <li
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className={`list-group-item ${selectedPostId === post.id ? 'active' : ''}`}
            >
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

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchPostsWithRedux })(App);
