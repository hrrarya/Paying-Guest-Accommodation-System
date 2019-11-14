import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { getPosts } from "./postdata";

class App extends Component {
  state = {
    posts: getPosts()
  };

  handleLike = post => {
    const posts = [...this.state.posts];
    const selectedMovie = posts.indexOf(post);
    posts[selectedMovie].Like = !posts[selectedMovie].Like;

    this.setState({
      posts
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <Navbar posts={posts} onLike={this.handleLike} />
      </div>
    );
  }
}

export default App;
