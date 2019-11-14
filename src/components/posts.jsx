import React from "react";
import Post from "./post";

const Posts = ({ posts, onLike }) => {
  return (
    <div>
      <div id="post">
        <div className="row">
          {posts.length > 0 &&
            posts.map(post => (
              <Post
                key={post.id}
                post={post}
                onLike={onLike}
                path={`/${post.id}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
