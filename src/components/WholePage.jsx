import React from "react";
import Home from "./home";
import Search from "./search";
import Posts from "./posts";
import Footer from "./footer";

const WholePage = ({ posts, onLike }) => {
  return (
    <div>
      <Home />
      <Search />
      <Posts posts={posts} onLike={onLike} />
      <Footer />
    </div>
  );
};

export default WholePage;
