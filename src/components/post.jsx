import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

// const

const Post = ({ post, path, onLike }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={post.Image} alt={post.Title} />
        <div className="card-body">
          <h5>
            {post.Title}{" "}
            <span
              className={
                post.Like ? "right fa fa-heart" : "right fa fa-heart-o"
              }
              onClick={() => onLike(post)}
            ></span>
          </h5>

          <Link to={path} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
