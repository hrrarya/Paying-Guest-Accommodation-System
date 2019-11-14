import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPost } from "../postdata";
import Footer from "./footer";
import Ratings from "./ratings";

const PostDetails = ({ match }) => {
  let id = +match.params.id;
  const [post] = useState(getPost(id)[0]);
  return (
    <div>
      <div id="postDetails">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="imgSection">
              <img src={post.Image} alt={post.Title} className="img-fluid" />
              <Ratings />
            </div>
          </div>
          <div className="col-md-4">
            <h4>
              <strong>{post.Title}</strong>
            </h4>
            <h5>{post.Address}</h5>
            <p>{post.Description}</p>
            <Link to="/">See location in google map's.</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
