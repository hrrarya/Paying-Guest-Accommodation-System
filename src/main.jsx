import React from "react";
import { Switch, Route } from "react-router-dom";
import PostDetails from "./components/postDetails";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/:id" children={PostDetails}>
      </Switch>
    </div>
  );
};

export default Main;
