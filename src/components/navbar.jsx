import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import WholePage from "./WholePage";
import PostDetails from "./postDetails";

const Navbar = ({ posts, onLike }) => {
  return (
    <div>
      <div className="header-top-menu">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-light bg-light">
        <div className="logo">
          <Link to="/" className="navbar-brand text-center">
            Paying Guest
          </Link>
        </div>

        <div className="menu float-right">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Owner</Link>
            </li>
            <li>
              <Link to="/">PG</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route
          path="/"
          exact
          component={() => <WholePage posts={posts} onLike={onLike} />}
        />
        <Route path="/:id" component={PostDetails} />
      </Switch>
    </div>
  );
};

export default Navbar;
