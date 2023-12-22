import React from "react";
import { connect } from "react-redux";
import {fetchPostsWithRedux } from "../redux/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }
  render() {
    return (
      <ul>
        {this.props.posts &&
          this.props.posts.map((post) => {
            return <li key={post.id}>{post.title}</li>; // Adding key for each list item
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

let Container = connect(mapStateToProps, { fetchPostsWithRedux })(App);

export default Container; // Exporting the Container component
